import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Country, Flag } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { ServeStaticModule } from '@nestjs/serve-static';

//Interface import
import { DatabaseConfig } from '../../interfaces/database.config.interface';
import { FormmattedImage } from './interface/image.interface';
//DTO import
import { ImageQueryControlDTO } from './dto/image.dto';

@Injectable()
export class FlagService {
  constructor(
    private readonly Prisma: PrismaService
  ) {}

  async getFlagByName(preferenceFlag: ImageQueryControlDTO): Promise<FormmattedImage[]> {
    // console.log(country)
    let where = {}

    if (preferenceFlag !== null) { where = { name: { equals: preferenceFlag.country } } }
    // console.log(where)

    const response = await this.Prisma.flag.findFirst({
      where,
      select: {
        url: true
      }
    })
    console.log(response)
    const flag = await response && response.url !== null ? [ response ] : []
    return flag;
  }
}

@Injectable()
export class CoatOfArmService {
  constructor(
    private readonly Prisma: PrismaService
  ) {}

  // async getCoatOfArmByName(nameCoatOfArm: ImageQueryControlDTO): Promise<FormmattedImage[]> {
  //   const response = await this.Prisma.coat_Of_Arms.findFirst({
  //     where: {
  //       name: { equals: nameCoatOfArm }
  //     },
  //     select: {
  //       url: true
  //     }
  //   })
  //   return { url: response.url };
  // }
}