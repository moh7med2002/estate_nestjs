import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MulterModule } from '@nestjs/platform-express';
import { CustomStorage } from './custom.storage';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule } from './admin/admin.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { CategoryModule } from './category/category.module';
import { CurrencyModule } from './currency/currency.module';
import { EstateModule } from './estate/estate.module';
import { CommentModule } from './comment/comment.module';
import { ViewModule } from './view/view.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({ global: true, secret: 'token' }),
    MulterModule.registerAsync({
      useFactory: () => ({
        storage: CustomStorage.storage,
      }),
    }),
    AdminModule,
    UserModule,
    CategoryModule,
    CurrencyModule,
    EstateModule,
    CommentModule,
    ViewModule,
    ImagesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
