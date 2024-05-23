import { Body, Controller, Get, Post } from '@nestjs/common';
import { GetUsersResponseDto } from './dto/get-users-response.dto';
import { UsersService } from '../../application/users.service';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { CreateUserCommand } from '../../application/commands/create-user.command';
import { GetUserResponseDto } from './dto/get-user-response.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  @Get()
  async getUsers(): Promise<GetUsersResponseDto> {
    const users = await this.usersService.getUsers();
    return GetUsersResponseDto.build(users);
  }

  @Post()
  async createUser(
    @Body() dto: CreateUserRequestDto,
  ): Promise<GetUserResponseDto> {
    const createUserCommand = new CreateUserCommand(dto.name, dto.email);
    const user = await this.usersService.createUser(createUserCommand);
    return GetUserResponseDto.build(user);
  }
}
