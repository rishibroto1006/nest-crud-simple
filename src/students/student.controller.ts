import { Body, Controller, Get, Post } from '@nestjs/common';
import { studentService } from './student.service';
import { Prisma, student } from '@prisma/client';

@Controller('student')
export class studentController {
  constructor(private studentService: studentService) {}
  @Post('create')
  async createStudent(
    @Body() studentData: Prisma.studentCreateInput,
  ): Promise<student | string | null> {
    return this.studentService.createStudent(studentData);
  }
  @Get()
  getAllStudents(): string {
    return 'Get All Students';
  }
}
