import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from 'typeorm';
import { Quiz } from '../quiz/quiz.entity';

@Entity('questions')
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn({
    comment: 'The table unique identifier',
  })
  id: number;

  @Column({
    type: 'varchar',
  })
  question: string;

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  quiz: Quiz[];
}
