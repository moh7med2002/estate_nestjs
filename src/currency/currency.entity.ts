import {
  Table,
  Column,
  Model,
  HasMany,
  BelongsToMany,
  DataType,
} from 'sequelize-typescript';
import { Estate } from 'src/estate/estate.entity';

@Table
export class Currency extends Model {
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

  @HasMany(() => Estate)
  estates: Estate[];
}
