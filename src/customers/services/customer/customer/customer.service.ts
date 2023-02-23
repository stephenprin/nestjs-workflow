import { Injectable } from '@nestjs/common';
import { customerServiceDto } from '../../customerService.dto';

@Injectable()
export class CustomerService {
    customer = [
        {
            id: 1,
            name: 'John Doe',
            email: 'str553@gmail.com',
            password: '123456'
        }
    ]
    fetchCustomers() { 
        return this.customer
    }
    
    getCustomerId(id: number) { 
        const user = this.fetchCustomers().find(user => user.id === id)
        return user
    }
    
    createCustomer(customerData: customerServiceDto) {
        const user = this.fetchCustomers().push(customerData)
        return user
     }
}
