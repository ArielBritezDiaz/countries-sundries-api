import { Module } from "@nestjs/common";
import { ImageController } from "./image.controller";
import { CoatOfArmService, FlagService } from "./image.service";

@Module({
    controllers: [ImageController],
    providers: [FlagService, CoatOfArmService],
    imports: []
})

export class ImageModule {}