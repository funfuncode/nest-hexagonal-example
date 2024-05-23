import { Module } from '@nestjs/common';
import { UserRepository } from '../../../application/ports/user-repository';
import { InMemoryUserRepository } from './repositories/in-memory-user.repository';

@Module({
  providers: [
    {
      provide: UserRepository,
      useClass: InMemoryUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class InMemoryUsersPersistenceModule {}
