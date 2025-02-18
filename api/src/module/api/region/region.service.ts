import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "../../../interface/database.config.interface";
//DTO import
import { RegionsValueControlDTO } from "./dto/region.dto";
//Interface import
import { FormattedRegions } from "./interface/region.interface";
import { Region } from "./entity/region.entity";
import { Repository, Like } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RegionService {
  constructor(
    private configService: ConfigService<{ database: DatabaseConfig }, true>,
    @InjectRepository(Region)
    private readonly regionRepository: Repository<Region>
  ) {}

  async getAllRegions(query: RegionsValueControlDTO): Promise<FormattedRegions[]> {
    console.log("query", query)

    let order = {}
    if(query.order_by && query.order_direction) {
      order = {[query.order_by]: query.order_direction}
    } else if (query.order_by && !query.order_direction) {
      order = {[query.order_by]: 'asc'}
    } else if (!query.order_by && query.order_direction) {
      order = {id_region: query.order_direction}
    }

    const response = await this.regionRepository.find({
      ...(query.from !== 0 && { skip: query.from } ),
      ...(query.take && query.take <= 30 ? { take: query.take } : { take: 30 } ),
      where: {
        ...(query.id && { id_region: query.id }),
        ...(query.name && { name: Like(`%${query.name.toUpperCase()}%`) }),
      },
      select: {
        id_region: true,
        name: true
      },
      order
    })
    console.log("response", response)

    return response !== null ? response : [];
  }
}