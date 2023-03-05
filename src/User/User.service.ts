/* eslint-disable prettier/prettier */
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { User } from 'src/models/User.model';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async insertUser(user: User): Promise<InsertResult> {
    return this.userRepository.insert(user);
  }

  async findOneUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id: id });
  }

  async update(id: number, user: User): Promise<User> {
    const userUpdate = await this.findOneUser(id);
    if (userUpdate === undefined) {
      throw new NotFoundException();
    }
    await this.userRepository.update(id, user);
    return this.findOneUser(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    const userDelete = await this.findOneUser(id);
    if (userDelete === undefined) {
      throw new NotFoundException();
    }
    return this.userRepository.delete(id);
  }
}
