import { Sequelize } from 'sequelize-typescript';
import { Admin } from 'src/admin/admin.entity';
import { Category } from 'src/category/category.entity';
import { Comment } from 'src/comment/comment.entity';
import { Currency } from 'src/currency/currency.entity';
import { Estate } from 'src/estate/estate.entity';
import { Image } from 'src/images/images.entity';
import { User } from 'src/user/user.entity';
import { View } from 'src/view/view.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '059283805928388',
        database: 'estate',
      });
      sequelize.addModels([
        Admin,
        User,
        Category,
        Currency,
        Estate,
        Comment,
        View,
        Image,
      ]);
      await sequelize.sync({ alter: false });
      return sequelize;
    },
  },
];
