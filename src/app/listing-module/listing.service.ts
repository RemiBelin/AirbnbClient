import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ListingService {

  //private dataUrl = '/api/photos';
  private photosUrl = 'assets/img/';
  //private appUrl = 'http://localhost:4200';
 
  constructor(private http: HttpClient,private router: Router) { }

  getPhotos(): Observable<Object> {
    //return this.http.get(this.dataUrl).pipe(map((tab:Object[]) => tab.map(item => { item['name'] = this.photosUrl + item['name']; return item; })));
    console.log("starting getPhotos");
    //const monObs = this.http.get(this.appUrl + '/photos').pipe(map((tab:Object[]):Object[] => tab.map(item => { item['name'] = this.photosUrl + item['name']; return item; })));
    const monObs = this.http.get('api/photos')
                      .pipe(map((tab:Object[]):Object[] => tab.map(item => { item['name'] = this.photosUrl + item['name']; return item; })),  
                      catchError(err => { console.log("catchError starting!"); 
                                          //this.router.navigate(['/' , 'login_page']); 
                                          this.router.navigateByUrl("/login");
                                          return throwError(err);} ));
    
    return monObs;
 
  }

  login(form:Object): Observable<Object> {

    let postData = new FormData();
   
    postData.append('username' , form['username']);
    postData.append('password' , form['password']);
    
    //return this.http.post(this.appUrl  + '/postlogin',postData);
    return this.http.post('api/postlogin', postData);
  }

}
