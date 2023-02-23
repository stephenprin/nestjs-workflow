import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { CustomerService } from 'src/customers/services/customer/customer/customer.service';
import { createCustomerDto } from '../../customer.dto';

@Controller('customer')
export class CustomerController {
    constructor(private customerServices:CustomerService) {
        
    }
    @Get()
    getUsers() { 
        let customer = this.customerServices.fetchCustomers()
        return customer
       
    }
    // @Get('post')

    // getPost() {
    //     return [{
    //         name: "James author", email: "ghd423", post: [{ title: "post1", body: "body1" }, { title: "post2", body: "body2" }]
    //     }]
    // }

    @Post('create')  
    @UsePipes(ValidationPipe)
    createUser(@Body() customerData:createCustomerDto) { 
    return this.customerServices.createCustomer(customerData)
    
        
    }
    @Get(':id')
    getUserId(@Param('id', ParseIntPipe) id: number, @Res() req:Request, @Res() res:Response)  {
        const user=this.customerServices.getCustomerId(id)
        if (!user) { 
            throw new HttpException("User not found", HttpStatus.NOT_FOUND)
        }
        return user
        
    }
}
