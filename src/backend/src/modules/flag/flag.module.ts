import { Module } from "@nestjs/common";
import { FlagController } from "./flag.controller";
import { FlagService } from "./flag.service";

@Module({
  controllers: [FlagController],
  providers: [FlagService],
  imports: []
})
export class FlagModule {}