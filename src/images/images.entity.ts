import {
  Table,
  Column,
  Model,
  ForeignKey,
  BelongsTo,
  DataType,
} from 'sequelize-typescript';
import { Estate } from 'src/estate/estate.entity';

@Table
export class Image extends Model {
  @Column({
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id: number;

  @Column({
    allowNull: false,
    defaultValue: '',
    type: DataType.STRING,
  })
  path: string;

  @ForeignKey(() => Estate)
  @Column
  estateId: number;

  @BelongsTo(() => Estate)
  estate: Estate;
}
