import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';
import { QuestionController } from '../question/question.controller';
import { Question } from '../question/question.entity';
import { QuestionService } from '../question/question.service';
import { QuestionRepository } from '../question/question.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      Quiz,
      Question,
      QuestionRepository,
    ]),
  ],
  controllers: [QuizController, QuestionController],
  providers: [QuizService, QuestionService],
})
export class QuizModule {}
