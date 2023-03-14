import { IsNotEmpty, Length } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty({ message: 'I need job.' })
  @Length(3, 255)
  job: string;

  @IsNotEmpty({ message: 'I need description.' })
  @Length(3, 255)
  description: string;
}
