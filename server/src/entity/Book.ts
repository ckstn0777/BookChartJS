import { Entity, ObjectIdColumn, ObjectID, Column } from "typeorm";

@Entity()
export class Book {
  @ObjectIdColumn()
  id!: ObjectID;

  @Column()
  Title!: string;

  @Column()
  Author!: string;

  @Column()
  Genre!: string;

  @Column()
  Height!: Int32Array;

  @Column()
  Publisher!: string;

  @Column()
  Publication_year!: string;
}
