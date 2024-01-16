import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class student {
  id?: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
