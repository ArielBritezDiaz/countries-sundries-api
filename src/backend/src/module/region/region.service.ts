import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../interface/database.config.interface";
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

    const response = await this.prisma.region.findMany({
      ...(preferencesParams.from && { skip: preferencesParams.from } ),
      ...(preferencesParams.take && { take: preferencesParams.take } ),
      where: {
        ...(preferencesParams.id && { id_region: preferencesParams.id }),
        ...(preferencesParams.name && { name: { contains: preferencesParams.name.toUpperCase() } }),
      },
      select: {
        id_region: true,
        name: true
      },
      orderBy: {
        ...(preferencesParams.order_by && { [preferencesParams.order_by]: preferencesParams.order_direction })
      }
    });
    console.log("response", response)

    return response !== null ? response : [];
  }
}