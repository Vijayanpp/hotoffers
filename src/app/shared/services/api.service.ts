
/**
 * Service to hanlde all the http requests
 * created on 20-04-2017
 * created by UI Team
 */

import { Injectable } from '@angular/core';

import {
  Http,
  Headers,
  Request,
  Response,
  RequestOptions,
  RequestOptionsArgs
} from "@angular/http";

import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {
  constructor( private http: Http) { }
  /**
   * 
   * @param url - API URL
   * @param body -body to send
   * @param header -HTTP headers
   */
  sendData(url: string, body: Object, header: Object): Observable<any> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers(header);
    let options = new RequestOptions({
      headers: headers
    });
    return this.intercept(this.http.post(url, body, options))
  }
  /**
   * Function to fetch data from the API URL using Post method
   * @param url - API URL
   * @param header-HTTP Headers
   */


  fetchDataPost(url: string,body, header: Object): Observable<any> {

    let headers = new Headers(header);
    let options = new RequestOptions({
      headers: headers
    });
    return this.intercept(this.http.post(url,body,options));
  }

  /**
   * Function to fetch data from the API URL using Get method
   * @param url - API URL
   * @param header-HTTP Headers
   */

  fetchData(url: string, header: Object): Observable<any> {

    let headers = new Headers(header);
    let options = new RequestOptions({
      headers: headers
    });
    return this.intercept(this.http.get(url,options));
  }

  /**
   * Function to update the data in the API URL
   * @param url - API URL
   * @param body -datas to update
   * @param header -HTTP headers
   */

  updateData(url: string, body: Object, header: Object): Observable<any> {

    let bodyString = JSON.stringify(body);
    let headers = new Headers(header);
    let options = new RequestOptions({
      headers: headers
    });
    return this.intercept(this.http.put(url, body, options))
  }

  /**
   * Function to delete Data in the API URL
   * @param url - API URL with id
   * @param header -HTTP Headers
   */

  deleteData(url: string, header: Object): Observable<any> {
   
    let headers = new Headers(header);
    let options = new RequestOptions({
      headers: headers
    });
    return this.intercept(this.http.delete(url,options))
  }


  /**
   * Interceptor to handle all the http request methods
   * @param observable :Http request
   */

  intercept(observable: Observable<Response>): Observable<any> {

    return observable.map((res: Response) => res.json()).catch((err, source) => {
      if (err.status == 401 || err.status == 403) {
        console.log('authentication error')
      }
      else {
        return Observable.throw(err);
      }
    });

  }

}