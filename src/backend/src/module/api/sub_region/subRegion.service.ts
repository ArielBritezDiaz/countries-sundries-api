import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interface/database.config.interface";
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
    // console.log("preferencesParams in service", preferencesParams)

    const response = await this.prisma.sub_Region.findMany({
      ...(preferencesParams.from && { skip: preferencesParams.from } ),
      ...(preferencesParams.take && { take: preferencesParams.take } ),
      where: {
        ...(preferencesParams.id && { id_sub_region: preferencesParams.id }),
        ...(preferencesParams.name && { name: { contains: preferencesParams.name.toUpperCase() } }),
        ...(preferencesParams.id_region_fk && { id_region: preferencesParams.id_region_fk })
      },
      select: {
        id_sub_region: true,
        name: true,
        id_region: true
      },
      orderBy: {
        ...(preferencesParams.order_by && { [preferencesParams.order_by]: preferencesParams.order_direction })
      }
    });
    // console.log("response in service", response)
    
    return response !== null ? response : [];
  }
}