import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from './todo.controller';
import { TodoRepository } from './todo.repository';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoRepository, Todo])],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
