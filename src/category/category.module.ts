import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { categoryRepositry } from 'src/constants/entityRepositry';
import { Category } from './category.entity';

@Module({
  providers: [
    {
      provide: categoryRepositry,
      useValue: Category,
    },
    CategoryService,
  ],
  controllers: [CategoryController],
  exports: [categoryRepositry],
})
export class CategoryModule {}
