import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';

//Interface import
import { DatabaseConfig } from '../../interface/database.config.interface';
import { FormmattedImage } from './interface/image.interface';
//DTO import
import { ImageQueryControlDTO } from './dto/image.dto';

@Injectable()
export class FlagService {
  constructor(
    private readonly Prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getFlag(preferenceFlag: ImageQueryControlDTO): Promise<FormmattedImage[]> {
    console.log("preferenceFlag:", preferenceFlag)

    const response = await this.Prisma.flag.findFirst({
      where: {
        ...(preferenceFlag.id && { id_flag: preferenceFlag.id }),
        ...(preferenceFlag.name && { name: { contains: preferenceFlag.name.replaceAll(' ', '_').toLocaleLowerCase() } })
      },
      select: {
        url: true
      }
    })
    // console.log("Response: ", response)

    const flag = response && response !== null ? [ { url: `${response.url}` } ] : [ { url: null }]
    // console.log("flag server:", flag)
    return flag;
  }
}

@Injectable()
export class CoatOfArmService {
  constructor(
    private readonly Prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getCoatOfArm(preferenceCoatOfArm: ImageQueryControlDTO): Promise<FormmattedImage[]> {
    console.log("preferenceCoatOfArm:", preferenceCoatOfArm)

    const response = await this.Prisma.flag.findFirst({
      where: {
        ...(preferenceCoatOfArm.id && { id_flag: preferenceCoatOfArm.id }),
        ...(preferenceCoatOfArm.name && { name: { contains: preferenceCoatOfArm.name.replaceAll(' ', '_').toLocaleLowerCase() } })
      },
      select: {
        url: true
      }
    })
    // console.log("Response: ", response)

    const flag = response && response !== null ? [ { url: `${response.url}` } ] : [ { url: null }]
    // console.log("flag server:", flag)
    return flag;
  }
}