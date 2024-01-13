// Service to Implement and connect to Prisma ORM

import { PrismaClient } from "@prisma/client";
import { Injectable, OnModuleInit } from "@nestjs/common";

@Injectable()
export class dbService extends PrismaClient implements OnModuleInit {

    // Optional: If not provided, db connection happens on first query
    async onModuleInit() {
        await this.$connect()
        console.log('Database Connected.')
    }
}