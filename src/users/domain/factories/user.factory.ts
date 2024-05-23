import { Injectable } from '@nestjs/common';
import { User } from '../user';
import { randomUUID } from 'crypto';

@Injectable()
export class UserFactory {
  create(name: string, email: string): User {
    return new User(randomUUID(), name, email);
  }
}
