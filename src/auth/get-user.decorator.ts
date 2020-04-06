import { createParamDecorator } from '@nestjs/common';
import { IAuth } from './interfaces/auth.interface';

export const GetUser = createParamDecorator((data, req): IAuth => {
  return req.user;
});
