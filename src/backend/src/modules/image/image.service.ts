import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Country, Flag } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { DatabaseConfig } from '../../interfaces/database.config.interface';
import { ServeStaticModule } from '@nestjs/serve-static';

@Injectable()
export class FlagService {
    constructor(
        private readonly Prisma: PrismaService
    ) {}

    async getFlagByName(nameFlag: string): Promise<string> {

        const response = await this.Prisma.flag.findFirst({
            where: {
                name: { equals: nameFlag }
            },
            select: {
                url: true
            }
        })
        const url = response.url;
        return url
    }
}

@Injectable()
export class CoatOfArmService {
    constructor(
        private readonly Prisma: PrismaService
    ) {}

    async getCoatOfArmByName(nameCoatOfArm: string): Promise<string> {
        const response = await this.Prisma.coat_Of_Arms.findFirst({
            where: {
                name: { equals: nameCoatOfArm }
            },
            select: {
                url: true
            }
        })
        const url = response.url
        return url
    }
}