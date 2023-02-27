import { ClassSerializerInterceptor, Controller, Get, HttpException, HttpStatus, Inject, Param, UseInterceptors } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { serializeUserDto, UserDto } from 'src/users/types';

@Controller('users')
export class UsersController {
  constructor(@Inject('USER_SERVICE') private readonly userService: UsersService) {}

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('')
  getUsers() {
    let user = this.userService.getUsers();
    return user;
  }
    
  @UseInterceptors(ClassSerializerInterceptor)
    @Get(':username')
    getUserByUsername(@Param('username') username: string) {
        const user = this.userService.getUserByUsername(username);

      if (user) return new serializeUserDto(user)
      else {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND)
      }
      
    }
}
