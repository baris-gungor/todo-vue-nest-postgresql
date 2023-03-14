import { IsNotEmpty, Length } from 'class-validator';

export class CreateQuizDto {
  @IsNotEmpty({ message: 'I need title.' })
  @Length(3, 255)
  title: string;

  @IsNotEmpty({ message: 'I need description.' })
  @Length(3, 255)
  description: string;
}
