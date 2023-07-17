import { Module } from '@nestjs/common';
import { ViewService } from './view.service';
import { ViewController } from './view.controller';
import { viewRepositry } from 'src/constants/entityRepositry';
import { View } from './view.entity';

@Module({
  providers: [
    {
      provide: viewRepositry,
      useValue: View,
    },
    ViewService,
  ],
  controllers: [ViewController],
  exports: [viewRepositry],
})
export class ViewModule {}
