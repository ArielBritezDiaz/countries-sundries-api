import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
    const protocol = process.env.PROTOCOL
    const host = process.env.DB_HOST
    const port = process.env.DB_PORT
    const apiVersion = process.env.API_VERSION

    const nameFlag = 'argentina'
    const typeFile = 'svg'

    const newRegister = await prisma.flag.create({
        data: {
            name: 'Test Flag',
            type: 'svg',
            url: `${protocol}://${host}:${port}/api/${apiVersion}/country/flag/${nameFlag}.${typeFile}`
        }
    })
    console.log(newRegister)
}

main()