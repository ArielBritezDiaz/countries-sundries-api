import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
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

    const response = await this.prisma.sub_Region.findMany({
      ...(preferencesParams.from !== 0 && { skip: preferencesParams.from } ),
      ...(preferencesParams.take !== 0 && { take: preferencesParams.take } ),
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