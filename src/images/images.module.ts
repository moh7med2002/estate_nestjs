import { Module } from '@nestjs/common';
import { ImagesService } from './images.service';
import { ImagesController } from './images.controller';
import { imageRepositry } from 'src/constants/entityRepositry';
import { Image } from './images.entity';

@Module({
  providers: [
    {
      provide: imageRepositry,
      useValue: Image,
    },
    ImagesService,
  ],
  controllers: [ImagesController],
  exports: [imageRepositry],
})
export class ImagesModule {}
