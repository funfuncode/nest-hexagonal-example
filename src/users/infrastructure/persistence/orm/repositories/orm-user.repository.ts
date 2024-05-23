import { UserRepository } from '../../../../application/ports/user-repository';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../../../domain/user';
import { UserMapper } from '../mappers/user-mapper';

@Injectable()
export class OrmUserRepository implements UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<User[]> {
    const entities = await this.userRepository.find();
    return entities.map((item) => UserMapper.toDomain(item));
  }

  async save(user: User): Promise<User> {
    const persistenceModel = UserMapper.toPersistence(user);
    const entity = await this.userRepository.save(persistenceModel);
    return UserMapper.toDomain(entity);
  }
}
