import { Module } from '@nestjs/common';
import { EstateService } from './estate.service';
import { EstateController } from './estate.controller';
import { estateRepositry } from 'src/constants/entityRepositry';
import { Estate } from './estate.entity';

@Module({
  providers: [
    {
      provide: estateRepositry,
      useValue: Estate,
    },
    EstateService,
  ],
  controllers: [EstateController],
  exports: [estateRepositry],
})
export class EstateModule {}
