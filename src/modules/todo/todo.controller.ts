import {
  Body,
  Controller,
  Query,
  Delete,
  Get,
  HttpCode,
  Post,
} from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { ValidationPipe } from '@nestjs/common/pipes';
import { CreateTodoDto } from 'src/shared/dtos';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Post('/regex')
  @HttpCode(200)
  async regex(@Query() regexdata) {
    return await this.todoService.testRegex(regexdata);
  }
  // @Delete('')
  // @HttpCode(200)
  // async removeTodo(@Query() id) {
  //   return await this.todoService.removeTodo(id);
  // }
  @Get('')
  async getTodo() {
    return await this.todoService.getTodo();
  }
  @Post('/add')
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  async addTodo(@Body() todoData: CreateTodoDto) {
    return await this.todoService.addTodo(todoData);
  }
  @Post('/remove')
  @HttpCode(200)
  async rmvTodo(@Query() id) {
    return await this.todoService.removeTodo(id);
  }
  @Post('/status')
  @HttpCode(200)
  async statusTodo(@Query() id) {
    return await this.todoService.statusTodo(id);
  }
  @Post('/update')
  @HttpCode(200)
  async updateTodo(@Query() id, @Body() todoData: CreateTodoDto) {
    return await this.todoService.updateTodo(id, todoData);
  }
}
