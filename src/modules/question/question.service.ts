import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from '../../shared/dtos';
import { Repository } from 'typeorm';
import { Question } from './question.entity';
import { Quiz } from '../quiz/quiz.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private questionRepository: Repository<Question>,
  ) {}

  async createNewQuestion(
    questionData: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    const newQuestion = await this.questionRepository.save({
      question: questionData.question,
    });
    quiz.questions = [...quiz.questions, newQuestion];
    await quiz.save();
    return newQuestion;
  }

  async getData() {
    return await this.questionRepository.find();
  }
}
