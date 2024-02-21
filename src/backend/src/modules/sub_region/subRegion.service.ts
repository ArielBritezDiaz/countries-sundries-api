import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { Region } from "@prisma/client";
import { DatabaseConfig } from "../../interfaces/database.config.interface";
import { PrismaService } from "../prisma/prisma.service";
//DTO import
import { SubRegionsValueControlDTO } from "./dto/subRegion.dto";
//Interface import
import { FormattedSubRegions } from "./interfaces/subRegion.interface";

@Injectable()
export class SubRegionService {
  constructor(
    private prisma: PrismaService,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ){}

  async getAllSubRegions(preferencesParams: SubRegionsValueControlDTO): Promise<FormattedSubRegions[]> {
    console.log("preferencesParams", preferencesParams)

    let skipFrom = {}
    let takeTake = {}
    let where = {
      id_sub_region: { contains: 0},
      name: { contains: '' },
      id_region: { contains: 0 }
    };
    let order_by = {}
    let order_direction = {}

    if (preferencesParams.from !== 0) { skipFrom = { skip: preferencesParams.from } }
    if (preferencesParams.take !== 0) { takeTake = { take: preferencesParams.take } }
    if (preferencesParams.id !== 0) { where.id_sub_region = { contains: preferencesParams.id } }
    if (preferencesParams.name !== null) { where.name = { contains: preferencesParams.name.toUpperCase() } }
    if (preferencesParams.id_region_fk !== 0) { where.id_region = { contains: preferencesParams.id_region_fk } }
    if (preferencesParams.order_by !== null) { order_by = { orderBy: preferencesParams.order_by } }
    if (preferencesParams.order_direction !== null) { order_direction = preferencesParams.order_direction }

    console.log("where", where);
    // console.log("order_by", order_by);
    // console.log("order_direction", order_direction);

    const response = await this.prisma.sub_Region.findMany({
      ...skipFrom,
      ...takeTake,
      where: {
        ...(preferencesParams.id !== 0 && { id_sub_region: preferencesParams.id }),
        ...(preferencesParams.name !== null && { name: { contains: preferencesParams.name.toUpperCase() } }),
        ...(preferencesParams.id_region_fk !== 0 && { id_region: preferencesParams.id_region_fk })
      },
      select: {
        id_sub_region: true,
        name: true,
        id_region: true
      },
      orderBy: {
        ...(preferencesParams.order_by !== null && { [preferencesParams.order_by]: preferencesParams.order_direction })
        
      }
    });
    // console.log("response", response)
    
    return response !== null ? response : [];
  }
}