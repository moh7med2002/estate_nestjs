import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Estate } from 'src/estate/estate.entity';
import { User } from 'src/user/user.entity';

@Table
export class View extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @ForeignKey(() => Estate)
  @Column
  estateId: number;

  @BelongsTo(() => Estate)
  estate: Estate;
}
