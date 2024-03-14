# syntax = docker/dockerfile:1

# Adjust BUN_VERSION as desired
ARG BUN_VERSION=1.0.30
FROM oven/bun:${BUN_VERSION} as base

LABEL fly_launch_runtime="Bun"

# Bun app lives here
WORKDIR /app/

# Set production environment
ENV NODE_ENV="production"

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y build-essential pkg-config python-is-python3

# Install node modules
COPY src ./src
COPY ./prisma ./prisma
COPY --from=node:18 /usr/local/bin/node /usr/local/bin/node
COPY package.json .
COPY bun.lockb .

RUN npm install -g prisma@5.9.1

RUN bun install --production

COPY node_modules/.prisma/client ./node_modules/.prisma

RUN bunx prisma generate

COPY tsconfig.json .

RUN bun run build

FROM oven/bun AS runner

# Copy application code
COPY . .


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /src /src

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD bun run deploy-one
