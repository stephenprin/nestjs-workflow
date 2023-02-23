import { Module } from '@nestjs/common';

import { CustomerController } from './controllers/customer/customer/customer.controller';
import { CustomerService } from './services/customer/customer/customer.service';
import { customerServiceDto } from './services/customerService.dto';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomersModule {
 
    
}
