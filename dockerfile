# Use the official Bun image as the base image
FROM oven/bun:1 as base

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY src/api/package*.json ./
COPY src/api/bun.lockb ./

# Install dependencies

ENV NODE_ENV=production
#RUN bun add @prisma/cli
#RUN bun add @prisma/client
#RUN bunx prisma generate
RUN bun test
#RUN bun build
#RUN bun install

FROM base AS prerelease
#COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# Copy the rest of the application
COPY src/api/ ./

USER bun

# Expose the port on which your API will run
EXPOSE 3000/tcp

# Start the application
CMD ["bun", "run", "start"]
