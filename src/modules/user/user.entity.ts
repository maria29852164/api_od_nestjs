import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserEnum } from '../../enums/user.enum';
import { typesDatabase } from '../../helpers/type_database/type_database.enum';
@Entity(UserEnum.table_name)
export class User extends BaseEntity {
  @PrimaryGeneratedColumn(typesDatabase.increment)
  id: number;
  @Column({
    type: typesDatabase.varchar,
    nullable: false,
    length: 100,
  })
  name: string;

  @Column({
    type: typesDatabase.varchar,
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({
    type: typesDatabase.varchar,
    nullable: false,
    length: 50,
  })
  phone_number: string;
  @Column({
    type: typesDatabase.varchar,
    nullable: false,
    length: 100,
  })
  lastname: string;
  @Column({
    type: typesDatabase.varchar,
    nullable: false,
    length: 100,
  })
  ci: string;

  @Column({
    type: typesDatabase.timestamp,
    name: typesDatabase.created_at,
  })
  createdAt: Date;
}
