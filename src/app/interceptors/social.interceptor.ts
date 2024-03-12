import { HttpInterceptorFn } from '@angular/common/http';

export const socialInterceptor: HttpInterceptorFn = (request, next) => {
  console.log(request);
  console.log(next);
  return next(request);
};

