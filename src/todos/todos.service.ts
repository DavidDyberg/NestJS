import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodosService {
    constructor(private readonly prisma: PrismaService) {}

async    findAll() {
        return this.prisma.todo.findMany()
    }

async    findOne(id: number) {
        return this.prisma.todo.findUnique({
            where: {
                id,
            }
        })
    }

async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
        
    return this.prisma.todo.create({
        data,
    })
    }

async  updateTodo(id: number, data: Prisma.TodoUpdateInput): Promise<Todo> {
        return this.prisma.todo.update({
            where: {
                id,
            },
            data
        })
    }

async   deleteTodo(id: number) {
        return this.prisma.todo.delete({
            where: {
                id,
            }
        })
    }
}
