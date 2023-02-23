import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { serializeUserDto, UserDto } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: UserDto[] = [
    {
      username: 'John Doe',
      password: '123456',
    },
    {
      username: 'Mohn Doe',
      password: '123456',
    },
    {
      username: 'Sohn Doe',
      password: '123456',
    },
  ];

  getUsers() {
      return this.users.map((user) => plainToClass(serializeUserDto, user))
  }

  getUserByUsername(username: string) {
    const user = this.users.find((user) => user.username === username);
    return user;
  }
}
