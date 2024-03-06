//DB config
import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    protocol: process.env.PROTOCOL,
    apiVersion: process.env.API_VERSION,
    port: parseInt(process.env.PORT, 10),
    host: process.env.DB_HOST,
    dbPort: parseInt(process.env.DB_PORT, 10)
}))