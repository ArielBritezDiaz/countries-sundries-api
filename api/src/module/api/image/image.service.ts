import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
//Interface import
import { DatabaseConfig } from '../../../interface/database.config.interface';
import { FormmattedImage } from './interface/image.interface';
//DTO import
import { ImageQueryControlDTO } from './dto/image.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Flag } from './entity/image-flag.entity';
import { CoatOfArm } from './entity/image-coat-of-arm.entity';

@Injectable()
export class FlagService {
  constructor(
    // the order of the imports is important, if the order is changed, the application will not work because the '@InjectRepository' will be overwrited.
    @InjectRepository(Flag)
    private readonly flagRepository: Repository<Flag>,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getFlag(preferenceFlag: ImageQueryControlDTO): Promise<FormmattedImage[]> {
    console.log("preferenceFlag:", preferenceFlag)

    const response = await this.flagRepository.findOne({
      where: {
        ...(preferenceFlag.id && { id_flag: preferenceFlag.id }),
        ...(preferenceFlag.name && { name: Like(`%${preferenceFlag.name.replaceAll(' ', '_').toLocaleLowerCase()}%`) })
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
    @InjectRepository(CoatOfArm)
    private readonly coatOfArmRepository: Repository<CoatOfArm>,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getCoatOfArm(preferenceCoatOfArm: ImageQueryControlDTO): Promise<FormmattedImage[]> {
    console.log("preferenceCoatOfArm:", preferenceCoatOfArm)

    const response = await this.coatOfArmRepository.findOne({
      where: {
        ...(preferenceCoatOfArm.id && { id_coat_of_arm: preferenceCoatOfArm.id }),
        ...(preferenceCoatOfArm.name && { name: Like(`%${preferenceCoatOfArm.name.replaceAll(' ', '_').toLocaleLowerCase()}%`) })
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