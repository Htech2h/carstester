import { Controller, Get, Req, Request } from '@nestjs/common';
//import { AppService } from './app.service';

@Controller('cars')
export class CarsController {
  constructor() {}
  @Get()
  findall(@Req() request: Request): String {
    return 'this should eventually return cars';
  }
}
