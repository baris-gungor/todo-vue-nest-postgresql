import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty({ message: 'I need question.' })
  @Length(3, 255)
  question: string;

  @IsNotEmpty({ message: 'I need quizId.' })
  quizId: number;
}
