import { User } from '../../../domain/user';

export class GetUserResponseDto {
  id: string;
  name: string;
  email: string;

  constructor(dto: GetUserResponseDto) {
    Object.assign(this, dto);
  }

  static build(user: User): GetUserResponseDto {
    return new GetUserResponseDto({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
}
