import { Module } from "@nestjs/common";
import { SubRegionController } from "./subRegion.controller";
import { SubRegionService } from "./subRegion.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubRegion } from "./entity/sub-region.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([SubRegion]),
  ],
  controllers: [SubRegionController],
  providers: [SubRegionService]
})

export class SubRegionModule {}