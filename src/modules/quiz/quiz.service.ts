import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuizDto, GetById } from './../../shared/dtos';
import { Quiz } from './quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz) private readonly quizRepository: Repository<Quiz>,
  ) {}
  async getQuiz() {
    return await this.quizRepository.find();
  }
  async getById(id: GetById) {
    return await this.quizRepository.findOneBy(id);
  }
  async createNewQuiz(quizData: CreateQuizDto) {
    return await this.quizRepository.save(quizData);
  }
}
