import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbService } from './db.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, dbService],
})
export class AppModule {}
