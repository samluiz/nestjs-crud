import { IsString, IsEmail, IsStrongPassword } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
