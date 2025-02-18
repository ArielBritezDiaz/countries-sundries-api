import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../../interface/database.config.interface";
//DTO import
import { CoatOfArmValueControlDTO } from "./dto/coat-of-arm.dto";
//Interface import
import { FormattedCoatOfArm } from "./interface/coat-of-arm.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { CoatOfArm } from "./entity/coat-of-arm.entity";
import { Repository } from "typeorm";


@Injectable()
export class CoatOfArmService {
  constructor(
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
    @InjectRepository(CoatOfArm)
    private readonly coatOfArmRepository: Repository<CoatOfArm>
  ) {}

  async getCoatOfArmAll(query: CoatOfArmValueControlDTO): Promise<FormattedCoatOfArm[]> {
    // console.log(query)
    
    let order = {}
    if(query.order_by && query.order_direction) {
      order = {[query.order_by]: query.order_direction}
    } else if (query.order_by && !query.order_direction) {
      order = {[query.order_by]: 'asc'}
    } else if (!query.order_by && query.order_direction) {
      order = {id_coat_of_arm: query.order_direction}
    }

    const response = await this.coatOfArmRepository.find({
      skip: query.from || 0,
      take: query.take && query.take <= 30 ? query.take : 30,
      where: {
        ...(query.id && { id_coat_of_arm: query.id }),
        ...(query.name && { name: query.name }),
        ...(query.type && { type: query.type })
      },
      order
    });
    // console.log("response:", response)

    const FormattedCoatOfArm = await response.map(coat_of_arm => {
      return {
        id_coat_of_arm: coat_of_arm.id_coat_of_arm,
        name: coat_of_arm.name,
        type: coat_of_arm.type,
        url: `${process.env.PROTOCOL}://${process.env.DB_HOST}:${process.env.PORT}/api/${process.env.API_VERSION}/image/coat-of-arm?name=${coat_of_arm.name}`
      }
    })
    console.log("FormattedCoatOfArm:", FormattedCoatOfArm)

    return FormattedCoatOfArm !== null && FormattedCoatOfArm.length > 0 ? FormattedCoatOfArm : []
  }

  async getCoatOfArmDetails(query: CoatOfArmValueControlDTO): Promise<FormattedCoatOfArm[]> {
    // console.log(query)

    const response = await this.coatOfArmRepository.findOne({
      where: {
        ...(query.id && { id_coat_of_arm: query.id }),
        ...(query.name && { name: query.name }),
        ...(query.type && { type: query.type })
      },
      select: {
        id_coat_of_arm: true,
        name: true,
        type: true,
      }
    });

    console.log("response:", response)

    const FormattedCoatOfArm = {
        id_coat_of_arm: response.id_coat_of_arm,
        name: response.name,
        type: response.type,
        url: `${process.env.PROTOCOL}://${process.env.DB_HOST}:${process.env.PORT}/api/${process.env.API_VERSION}/image/coat-of-arm?name=${response.name}`
    }
    console.log("FormattedCoatOfArm:", FormattedCoatOfArm)

    return FormattedCoatOfArm !== null && [FormattedCoatOfArm].length > 0 ? [FormattedCoatOfArm] : []
  }
}