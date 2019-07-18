import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PhimService {
  api: string = 'http://movie0706.cybersoft.edu.vn/api/';
  // api: string = 'http://svcy2.myclass.vn/api/';

  constructor(private http: HttpClient) { }

  getAPI(url): Observable<any>  {
    return this.http.get(this.api + url).pipe(
      tap(
        () => {},
        catchError((err) => {
          return this.handleError(err);
        })
      )
    ) 
  }

  handleError = (err) => {
    console.log('Lỗi khi request API');
    return err;
  }
}
