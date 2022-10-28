import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import * as formHN from './data/form_HN.json';
import { HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('forms/:country')
  public getForm(@Res() res: Response, @Param('country') country: string) {
    res.status(HttpStatus.OK).json(formHN);
  }
}
