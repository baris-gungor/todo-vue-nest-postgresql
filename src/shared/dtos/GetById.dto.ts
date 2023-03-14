import { IsNotEmpty } from 'class-validator';

export class GetById {
  @IsNotEmpty({ message: 'I need id.' })
  id: number;
}
