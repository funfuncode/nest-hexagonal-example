import { GetUserResponseDto } from './get-user-response.dto';
import { User } from '../../../domain/user';

export class GetUsersResponseDto {
  items: GetUserResponseDto[];

  constructor(dto: GetUsersResponseDto) {
    Object.assign(this, dto);
  }

  static build(users: User[]): GetUsersResponseDto {
    return new GetUsersResponseDto({
      items: users.map((user) => GetUserResponseDto.build(user)),
    });
  }
}
