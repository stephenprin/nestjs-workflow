import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';

import { CustomerController } from './controllers/customer/customer/customer.controller';
import { ValidateCustomerAcountMiddleware } from './middlewares/validate-customer-acount';
import { validateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomerService } from './services/customer/customer/customer.service';
import { customerServiceDto } from './services/customerService.dto';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService]
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(validateCustomerMiddleware,ValidateCustomerAcountMiddleware).forRoutes({
      path: 'customer/search/:id',
      method: RequestMethod.GET
    })
  }
 
    
}
