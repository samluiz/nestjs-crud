import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { ChangePasswordDTO } from './dto/change-password.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async create(data: CreateUserDTO) {
    return this.prisma.user.create({
      data,
    });
  }

  async update(id: number, data: UpdateUserDTO) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
      select: {
        name: true,
        username: true,
        email: true,
        updatedAt: true,
      },
    });
  }

  async changePassword(id: number, { password }: ChangePasswordDTO) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        password,
      },
    });
  }

  async delete(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
