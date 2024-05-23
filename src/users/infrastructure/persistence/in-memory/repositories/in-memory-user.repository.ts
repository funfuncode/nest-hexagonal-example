import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { User } from '../../../../domain/user';
import { UserMapper } from '../mappers/user-mapper';
import { UserRepository } from '../../../../application/ports/user-repository';

@Injectable()
export class InMemoryUserRepository implements UserRepository {
  private readonly users = new Map<string, UserEntity>();

  async findAll(): Promise<User[]> {
    const entities = Array.from(this.users.values());
    return entities.map((item) => UserMapper.toDomain(item));
  }

  async save(user: User): Promise<User> {
    const persistenceModel = UserMapper.toPersistence(user);
    this.users.set(persistenceModel.id, persistenceModel);

    const entity = this.users.get(persistenceModel.id);
    return UserMapper.toDomain(entity);
  }
}
