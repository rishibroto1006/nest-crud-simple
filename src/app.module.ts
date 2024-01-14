import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbService } from './db.service';
import { studentController, studentService } from './students';

@Module({
  imports: [],
  controllers: [AppController, studentController],
  providers: [AppService, dbService, studentService],
})
export class AppModule {}
