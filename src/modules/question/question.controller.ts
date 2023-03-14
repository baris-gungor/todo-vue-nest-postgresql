import { Body, Controller, HttpCode, Post, Get, Param } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { QuestionService } from '../question/question.service';
import { CreateQuestionDto } from '../../shared/dtos';
import { Question } from './question.entity';
import { QuizService } from '../quiz/quiz.service';

@Controller('question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
    private readonly quizService: QuizService,
  ) {}

  // @Post('/create')
  // @HttpCode(200)
  // @UsePipes(ValidationPipe)
  // async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
  //   const quiz = await this.quizService.getQuizById(question.quizId);
  //   return await this.questionService.createNewQuestion(question, quiz);
  // }

  @Get('/')
  async getAllData() {
    return await this.questionService.getData();
  }
}
