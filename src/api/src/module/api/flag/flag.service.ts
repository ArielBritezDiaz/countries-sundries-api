import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../../interface/database.config.interface";
//DTO import
import { FlagValueControlDTO } from "./dto/flag.dto";
//Interface import
import { FormattedFlag } from "./interfaces/flag.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Flag } from "./entity/flag.entity";


@Injectable()
export class FlagService {
  constructor(
    @InjectRepository(Flag)
    private readonly flagRepository: Repository<Flag>,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getFlagAll(query: FlagValueControlDTO): Promise<FormattedFlag[]> {
    // console.log(query)
    
    let order = {}
    if(query.order_by && query.order_direction) {
      order = {[query.order_by]: query.order_direction}
    } else if (query.order_by && !query.order_direction) {
      order = {[query.order_by]: 'asc'}
    } else if (!query.order_by && query.order_direction) {
      order = {id_flag: query.order_direction}
    }

    const response = await this.flagRepository.find({
      ...(query.from && { skip: query.from } ),
      ...(query.take && query.take <= 30 ? { take: query.take } : { take: 30 } ),
      where: {
        ...(query.id && { id_flag: query.id }),
        ...(query.name && { name: query.name }),
        ...(query.type && { type: query.type })
      },
      select: {
        id_flag: true,
        name: true,
        type: true,
      },
      order
    })
    // console.log("response:", response)

    const FormattedFlag = await response.map(flag => {
      return {
        id_flag: flag.id_flag,
        name: flag.name,
        type: flag.type,
        url: `${process.env.PROTOCOL}://${process.env.DB_HOST}:${process.env.PORT}/api/${process.env.API_VERSION}/image/flag?name=${flag.name}`
      }
    })
    console.log("FormattedFlag:", FormattedFlag)

    return FormattedFlag !== null && FormattedFlag.length > 0 ? FormattedFlag : []
  }

  async getFlagDetails(query: FlagValueControlDTO): Promise<FormattedFlag[]> {
    // console.log(query)

    const response = await this.flagRepository.findOne({
      where: {
        ...(query.id && { id_flag: query.id }),
        ...(query.name && { name: query.name }),
        ...(query.type && { type: query.type })
      },
      select: {
        id_flag: true,
        name: true,
        type: true,
      }
    })

    // console.log("response:", response)

    const FormattedFlag = {
        id_flag: response.id_flag,
        name: response.name,
        type: response.type,
        url: `${process.env.PROTOCOL}://${process.env.DB_HOST}:${process.env.PORT}/api/${process.env.API_VERSION}/image/flag?name=${response.name}`
    }

    console.log("FormattedFlag:", FormattedFlag)

    return FormattedFlag !== null && [FormattedFlag].length > 0 ? [FormattedFlag] : []
  }
}