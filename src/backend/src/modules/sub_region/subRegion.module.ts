import { Module } from "@nestjs/common";
import { SubRegionController } from "./subRegion.controller";
import { SubRegionService } from "./subRegion.service";

@Module({
  controllers: [SubRegionController],
  providers: [SubRegionService],
  imports: [],
})

export class SubRegionModule {}