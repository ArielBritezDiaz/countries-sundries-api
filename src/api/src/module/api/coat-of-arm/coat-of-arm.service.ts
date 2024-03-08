import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../../interface/database.config.interface";
import { PrismaService } from "../../prisma/prisma.service";
//DTO import
import { CoatOfArmValueControlDTO } from "./dto/coat-of-arm.dto";
//Interface import
import { FormattedCoatOfArm } from "./interface/coat-of-arm.interface";


@Injectable()
export class CoatOfArmService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getCoatOfArmAll(query: CoatOfArmValueControlDTO): Promise<FormattedCoatOfArm[]> {
    // console.log(query)
    
    const response = await this.prisma.coat_Of_Arm.findMany({
      ...(query.from && { skip: query.from } ),
      ...(query.take && query.take <= 30 ? { take: query.take } : { take: 30 } ),
      where: {
        ...(query.id && { id_coat_of_arm: query.id }),
        ...(query.name && { name: query.name }),
        ...(query.type && { type: query.type })
      },
      select: {
        id_coat_of_arm: true,
        name: true,
        type: true,
      },
      orderBy: {
        ...(query.order_by && { [query.order_by]: query.order_direction })
      }
    })
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

    const response = await this.prisma.coat_Of_Arm.findFirst({
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
    })

    // console.log("response:", response)

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