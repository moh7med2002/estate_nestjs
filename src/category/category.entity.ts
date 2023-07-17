import { Table, Column, Model, HasMany, DataType } from 'sequelize-typescript';
import { Estate } from 'src/estate/estate.entity';

@Table
export class Category extends Model {
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
