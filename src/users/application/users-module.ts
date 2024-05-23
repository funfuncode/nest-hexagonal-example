import { DynamicModule, Module, Type } from '@nestjs/common';
import { UsersController } from '../presentation/http/users-controller';
import { UsersService } from './users.service';
import { UserFactory } from '../domain/factories/user.factory';

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserFactory],
  exports: [UsersService],
})
export class UsersModule {
  static withInfrastructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: UsersModule,
      imports: [infrastructureModule],
    };
  }
}
