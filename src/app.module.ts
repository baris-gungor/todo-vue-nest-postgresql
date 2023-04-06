import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { TodoModule } from './modules/todo/todo.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   rootPath: join(__dirname, '..', 'vue-ui/dist'),
    // }),
    QuizModule,
    TodoModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
