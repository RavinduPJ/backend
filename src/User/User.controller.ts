/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from 'src/models/User.model';
import { UserService } from './User.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  //insert user
  @Post('/insert')
  create(@Body() user: User) {
    return this.userService.insertUser(user);
  }

  //find one user
  @Get(':id')
  getOneUser(@Param('id') id: string): Promise<User> {
    return this.userService.findOneUser(Number(id));
  }

  //update user
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: User): Promise<User> {
    return this.userService.update(Number(id), user);
  }

  //delete user
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.delete(Number(id));
  }
}
