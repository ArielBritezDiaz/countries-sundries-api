import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../../interface/database.config.interface";
import { SubRegionsValueControlDTO } from "./dto/subRegion.dto";
import { FormattedSubRegions } from "./interfaces/subRegion.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { SubRegion } from "./entity/sub-region.entity";
import { Repository, Like } from "typeorm";

@Injectable()
export class SubRegionService {
  constructor(
    @InjectRepository(SubRegion)
    private readonly subRegionRepository: Repository<SubRegion>,
    private configService: ConfigService<{ database: DatabaseConfig }, true>
  ){}

  async getAllSubRegions(query: SubRegionsValueControlDTO): Promise<FormattedSubRegions[]> {
    let order = {};
    if(query.order_by && query.order_direction) {
      order = { [query.order_by]: query.order_direction };
    } else if (query.order_by && !query.order_direction) {
      order = { [query.order_by]: 'ASC' };
    } else if (!query.order_by && query.order_direction) {
      order = { id_sub_region: query.order_direction };
    }

    let fromTake = {}
    if(query.from !== 0 && query.take) {
      fromTake = { skip: query.from, take: query.take };
    } else if (query.from !== 0 && !query.take) {
      fromTake = { skip: query.from, take: 37 };
    } else if (query.from === 0 || !query.from && query.take) {
      fromTake = { take: query.take };
    }
    
    console.log("query", query)

    const response = await this.subRegionRepository.find({
      ...fromTake,
      where: {
        ...(query.id && { id_sub_region: query.id }),
        ...(query.name && { name: Like(`%${query.name.toUpperCase()}%`) }),
        ...(query.id_region_fk && { id_region: query.id_region_fk })
      },
      select: {
        id_sub_region: true,
        name: true,
        id_region: true
      },
      order
    });

    // console.log("response", response)
    
    return response || [];
  }
}
