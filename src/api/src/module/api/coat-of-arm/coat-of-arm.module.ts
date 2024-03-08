import { Module } from "@nestjs/common";
import { CoatOfArmController } from "./coat-of-arm.controller";
import { CoatOfArmService } from "./coat-of-arm.service";

@Module({
  controllers: [CoatOfArmController],
  providers: [CoatOfArmService]
})
export class CoatOfArmModule {}