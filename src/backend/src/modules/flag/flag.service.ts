import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interfaces/database.config.interface";
import { PrismaService } from "../prisma/prisma.service";
//DTO import
import { FlagValueControlDTO } from "./dto/flag.dto";
//Interface import
import { FormattedFlag } from "./interfaces/flag.interface";


@Injectable()
export class FlagService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getFlagAll(query: FlagValueControlDTO): Promise<FormattedFlag[]> {
    // console.log(query)
    
    const response = await this.prisma.flag.findMany({
      ...(query.from !== 0 && { skip: query.from } ),
      ...(query.take !== 0 && { take: query.take } ),
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
      orderBy: {
        ...(query.order_by && { [query.order_by]: query.order_direction })
      }
    })
    console.log("response:", response)

    return response !== null && response.length > 0 ? response : []
  }

  async getFlagDetails(query: FlagValueControlDTO): Promise<FormattedFlag[]> {
    // console.log(query)

    const response = await this.prisma.flag.findFirst({
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

    console.log("response:", response)

    return response !== null ? [response] : []
  }
}