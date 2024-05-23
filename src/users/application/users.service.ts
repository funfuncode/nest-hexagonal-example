import { Injectable } from '@nestjs/common';
import { UserRepository } from './ports/user-repository';
import { User } from '../domain/user';
import { CreateUserCommand } from './commands/create-user.command';
import { UserFactory } from '../domain/factories/user.factory';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly userFactory: UserFactory,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }

  async createUser(command: CreateUserCommand): Promise<User> {
    const user = this.userFactory.create(command.name, command.email);
    return await this.userRepository.save(user);
  }
}
