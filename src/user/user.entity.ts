import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  Scopes,
} from 'sequelize-typescript';
import { Comment } from 'src/comment/comment.entity';
import { Estate } from 'src/estate/estate.entity';
import { View } from 'src/view/view.entity';

@Table
@Scopes(() => ({
  withoutTimeStamps: {
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
}))
export class User extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    allowNull: false,
    type: DataType.STRING,
  })
  email: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    defaultValue: '',
  })
  password: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    defaultValue: '',
  })
  phone: string;

  @Column({
    allowNull: false,
    type: DataType.STRING,
    defaultValue: '',
  })
  name: string;

  @HasMany(() => Estate)
  estates: Estate[];

  @HasMany(() => Comment)
  comments: Comment[];

  @HasMany(() => View)
  views: View[];
}
