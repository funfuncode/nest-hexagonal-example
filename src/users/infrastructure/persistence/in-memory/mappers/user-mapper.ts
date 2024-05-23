import { UserEntity } from '../entities/user.entity';
import { User } from '../../../../domain/user';

export class UserMapper {
  static toDomain(userEntity: UserEntity): User {
    const userModel = new User(
      userEntity.id,
      userEntity.name,
      userEntity.email,
    );
    return userModel;
  }

  static toPersistence(user: User): UserEntity {
    const entity = new UserEntity();
    entity.id = user.id;
    entity.name = user.name;
    entity.email = user.email;
    return entity;
  }
}
