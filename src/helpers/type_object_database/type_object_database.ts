import { typesDatabase } from '../type_database/type_database.enum';

export const varcharDefault = (isNullable = false) =>{
  return {
    type: typesDatabase.varchar,
    length: 40,
    nullable: isNullable,
  };
};
export const varcharUnique = (isNullable = false) => {
  return {
    type: typesDatabase.varchar,
    length: 200,
    nullable: isNullable,
  };
};

export const varcharEmails = () => {
  return {
    type: typesDatabase.email,
    unique: true,
    nullable: false,
  };
};
