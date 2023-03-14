import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity('todo')
export class Todo extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The table unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  job: string;

  @Column({
    type: 'text',
  })
  description: string;

  @Column({
    type: 'boolean',
    default: 0,
  })
  isFinished: boolean;
}
