import { Injectable } from '@nestjs/common';
import { Prisma, student } from '@prisma/client';
import { dbService } from 'src/db.service';

@Injectable()
export class studentService {
  constructor(private prisma: dbService) {}
  
  async findStudent(
    StudentWhereUniqueInput: Prisma.studentWhereUniqueInput,
  ): Promise<student | null> {
    return this.prisma.student.findUnique({ where: StudentWhereUniqueInput });
  }

  async createStudent(StudentCreateInput: Prisma.studentCreateInput): Promise<student|null> {
    return this.prisma.student.create({data: StudentCreateInput})
  }
}
