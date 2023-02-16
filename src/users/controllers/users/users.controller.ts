import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { createUserDto } from '../User.dto';

@Controller('users')
export class UsersController {
    
    @Get()
    getUsers() { 
        return[{name:"James author",  email:"michaech@gmail.com"}]
    }
    @Get('post')

    getPost() {
        return [{
            name: "James author", email: "ghd423", post: [{ title: "post1", body: "body1" }, { title: "post2", body: "body2" }]
        }]
    }

    @Post()
    createUser(@Body() userData:createUserDto) { 
    console.log(userData);
    return {};
        
        
    }
}
