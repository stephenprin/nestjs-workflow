import { Controller, Get, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { UserDto } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(@Inject('USER_SERVICE') private userService: UsersService) {}

  @Get('')
  getUsers() {
    let user = this.userService.getUsers();
    return user;
  }
}
