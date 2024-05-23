import { Module } from '@nestjs/common';
import { UserRepository } from '../../../application/ports/user-repository';
import { OrmUserRepository } from './repositories/orm-user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
      provide: UserRepository,
      useClass: OrmUserRepository,
    },
  ],
  exports: [UserRepository],
})
export class OrmUsersPersistenceModule {}
