import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
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

    const response = await this.prisma.region.findMany({
      ...(preferencesParams.from !== 0 && { skip: preferencesParams.from } ),
      ...(preferencesParams.take !== 0 && { take: preferencesParams.take } ),
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