import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';
import { CurrencyController } from './currency.controller';
import { currencyRepositry } from 'src/constants/entityRepositry';
import { Currency } from './currency.entity';

@Module({
  providers: [
    {
      provide: currencyRepositry,
      useValue: Currency,
    },
    CurrencyService,
  ],
  controllers: [CurrencyController],
  exports: [currencyRepositry],
})
export class CurrencyModule {}
