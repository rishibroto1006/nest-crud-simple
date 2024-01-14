import { Body, Controller, Get, Post } from "@nestjs/common";
import { studentService } from "./student.service";
import { student } from '@prisma/client';

@Controller('student')
export class studentController {
    constructor(private studentService: studentService) {}
    @Post('create')
    async createStudent(@Body() studentData: {name: string, age: number}):Promise<student| null> {
        const {name, age} = studentData
        return this.studentService.createStudent({age: age, name: name})
    }
    @Get()
    getAllStudents(): string {
        return 'Get All Students'
    }

}