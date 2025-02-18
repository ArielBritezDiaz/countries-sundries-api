import { Module } from "@nestjs/common";
import { ImageController } from "./image.controller";
import { CoatOfArmService, FlagService } from "./image.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CoatOfArm } from "./entity/image-coat-of-arm.entity";
import { Flag } from "./entity/image-flag.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([CoatOfArm, Flag]),
  ],
  controllers: [ImageController],
  providers: [FlagService, CoatOfArmService],
})

export class ImageModule {}