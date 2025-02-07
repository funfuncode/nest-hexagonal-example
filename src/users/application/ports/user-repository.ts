import { User } from '../../domain/user';

export abstract class UserRepository {
  abstract findAll(): Promise<User[]>;
  abstract save(alarm: User): Promise<User>;
}
