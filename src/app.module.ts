import { Module } from '@nestjs/common';
import { UsersModule } from './users/application/users-module';
import { IApplicationBootstrapOptions } from './common/interfaces/application-bootstrap-options.interface';
import { CoreModule } from './core/core.module';
import { UsersInfrastructureModule } from './users/infrastructure/users-infrastructure.module';

@Module({
  imports: [CoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  static register(options: IApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        UsersModule.withInfrastructure(
          UsersInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}
