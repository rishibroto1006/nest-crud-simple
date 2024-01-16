import { Body, Controller, Get, Post } from '@nestjs/common';
import { studentService } from './student.service';
import { student } from './student.dto';

@Controller('student')
export class studentController {
  constructor(private studentService: studentService) {}
  @Post('create')
  async createStudent(
    @Body() studentData: student,
  ): Promise<student | string | null> {
    return this.studentService.createStudent(studentData);
  }
  @Get()
  getAllStudents(): string {
    return 'Get All Students';
  }
}
