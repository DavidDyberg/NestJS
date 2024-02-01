import { CreateTodoDto } from './create-todo.dto';
import { PartialType } from '@nestjs/mapped-types';

export class updateTodoDto extends PartialType(CreateTodoDto) {}
