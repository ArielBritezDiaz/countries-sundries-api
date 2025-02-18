import { Module } from "@nestjs/common";
import { CoatOfArmController } from "./coat-of-arm.controller";
import { CoatOfArmService } from "./coat-of-arm.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoatOfArm } from "./entity/coat-of-arm.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([CoatOfArm]),
  ],
  controllers: [CoatOfArmController],
  providers: [CoatOfArmService]
})
export class CoatOfArmModule {}