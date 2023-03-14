import {
  Body,
  Controller,
  Query,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { QuizService } from './quiz.service';
import { CreateQuizDto, GetById } from './../../shared/dtos';

@Controller('quiz')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}
  @Get('')
  async getQuiz() {
    return await this.quizService.getQuiz();
  }
  @Get('/search')
  @UsePipes(ValidationPipe)
  async getById(@Query() id: GetById) {
    return await this.quizService.getById(id);
  }

  @Post('/create')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async createQuiz(@Body() quizData: CreateQuizDto) {
    return await this.quizService.createNewQuiz(quizData);
  }
}
