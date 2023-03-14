import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from 'src/shared/dtos';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}
  async testRegex(data) {
    console.log('1-): ', data.regex);
    console.log('2-): ', data.regexiki);
    const regex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    // const result = regex.test(regexdata);
    return;
  }
  async getTodo() {
    try {
      return await this.todoRepository.find();
    } catch (err) {
      return `getTodo hata: ${err}`;
    }
  }
  async addTodo(todoData: CreateTodoDto) {
    try {
      return await this.todoRepository.save(todoData);
    } catch (err) {
      return `addTodo hata: ${err}`;
    }
  }
  async removeTodo(id) {
    try {
      const firstUser = await this.todoRepository.findOneBy(id);
      const returnMsg = `${firstUser.id} id'li ${firstUser.job} işi silindi.`;
      await this.todoRepository.remove(firstUser);
      return returnMsg;
    } catch (err) {
      return `removeTodo hata: ${err}`;
    }
  }
  async statusTodo(idv) {
    try {
      const firstUser = await this.todoRepository.findOneBy(idv);
      let newStatus = false;
      firstUser.isFinished ? (newStatus = false) : (newStatus = true);
      return await this.todoRepository
        .createQueryBuilder()
        .update(Todo)
        .set({
          isFinished: newStatus,
        })
        .where('id = :id', { id: firstUser.id })
        .execute();
    } catch (err) {
      return `statusTodo hata: ${err}`;
    }
  }
  async updateTodo(idv, todoData) {
    try {
      const firstUser = await this.todoRepository.findOneBy(idv);
      return await this.todoRepository
        .createQueryBuilder()
        .update(Todo)
        .set({
          job: todoData.job,
          description: todoData.description,
        })
        .where('id = :id', { id: firstUser.id })
        .execute();
    } catch (err) {
      return `updateTodo hata: ${err}`;
    }
  }
}
