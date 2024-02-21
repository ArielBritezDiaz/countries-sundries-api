import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Region } from "@prisma/client";
import { DatabaseConfig } from "../../interfaces/database.config.interface";
import { PrismaService } from "../prisma/prisma.service";
//DTO import
import { RegionsValueControlDTO } from "./dto/region.dto";
//Interface import
import { FormattedRegions } from "./interface/region.interface";

@Injectable()
export class RegionService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ) {}

  async getAllRegions(preferencesParams: RegionsValueControlDTO): Promise<FormattedRegions[]> {
    console.log("preferencesParams", preferencesParams)

    let skipFrom = {}
    let takeTake = {}
    let where = {
      id_region: { contains: 0},
      name: { contains: '' }
    };
    let order_by = {}
    let order_direction = {}

    if (preferencesParams.from !== 0) { skipFrom = { skip: preferencesParams.from } }
    if (preferencesParams.take !== 0) { takeTake = { take: preferencesParams.take } }
    if (preferencesParams.id !== 0) { where.id_region = { contains: preferencesParams.id } }
    if (preferencesParams.name !== null) { where.name = { contains: preferencesParams.name.toUpperCase() } }
    if (preferencesParams.order_by !== null) { order_by = { orderBy: preferencesParams.order_by } }
    if (preferencesParams.order_direction !== null) { order_direction = preferencesParams.order_direction }

    // console.log("where", where);
    // console.log("order_by", order_by);
    // console.log("order_direction", order_direction);

    const response = await this.prisma.region.findMany({
      ...skipFrom,
      ...takeTake,
      where: {
        ...(preferencesParams.id !== 0 && { id_region: preferencesParams.id }),
        ...(preferencesParams.name !== null && { name: { contains: preferencesParams.name.toUpperCase() } }),
      },
      select: {
        id_region: true,
        name: true
      },
      orderBy: {
        ...(preferencesParams.order_by !== null && { [preferencesParams.order_by]: preferencesParams.order_direction })
      }
    });
    console.log("response", response)

    return response !== null ? response : [];
  }
}