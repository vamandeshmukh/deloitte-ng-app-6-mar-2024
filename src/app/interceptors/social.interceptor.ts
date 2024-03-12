import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs/internal/observable/of';

export const socialInterceptor: HttpInterceptorFn = (request, next) => {
  console.log(request);
  console.log(next);
  // if (request && (request.url.includes('ghost')))
  //   throw new Error('Do not search ghosts!');
  // return next(request);

  if (request && (request.url.includes('ghost'))) {
    const response = new HttpResponse({
      status: 422,
      statusText: 'Do not search ghosts!'
    });
    return of(response);
  }
  return next(request);
};

