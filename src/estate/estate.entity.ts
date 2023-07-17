import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Category } from 'src/category/category.entity';
import { Comment } from 'src/comment/comment.entity';
import { Currency } from 'src/currency/currency.entity';
import { Image } from 'src/images/images.entity';
import { User } from 'src/user/user.entity';
import { View } from 'src/view/view.entity';

@Table
export class Estate extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    defaultValue: '',
  })
  title: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    defaultValue: '',
  })
  address: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    defaultValue: '',
  })
  owner_phone: string;

  @Column({
    allowNull: false,
    type: DataType.TEXT,
    defaultValue: '',
  })
  description: string;

  @Column({
    allowNull: false,
    type: DataType.DOUBLE,
  })
  price: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  months: number;

  @Column({
    allowNull: false,
    type: DataType.DOUBLE,
  })
  area: number;

  @Column({
    allowNull: false,
    type: DataType.INTEGER,
  })
  type: number;

  @ForeignKey(() => Currency)
  @Column
  currencyId: number;

  @BelongsTo(() => Currency)
  currency: Currency;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Category)
  @Column
  categoryId: number;

  @BelongsTo(() => Category)
  category: Category;

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => View)
  views: View[];

  @HasMany(() => Image)
  images: Image[];
}
