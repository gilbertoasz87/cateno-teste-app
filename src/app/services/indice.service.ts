import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IndiceEntity } from '../models/indice_entity';
import { CountryEntity } from '../models/country_entity';

@Injectable({
  providedIn: 'root'
})
export class IndiceService {

  private indicesApiUrl = environment.url_api  + '/indicator/pov/';
  private countriesApiUrl = environment.url_api  + '/all';


  constructor(
    private http: HttpClient,
    // private messageService: MessageService,
    private oauthService: OAuthService) { }

  /** GET indices from the server */
  getIndices(code: string): Observable<IndiceEntity[]> {

    /*const token = this.oauthService.getAccessToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
    };*/

    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin':'*' })
    };

    return this.http.get<IndiceEntity[]>(this.indicesApiUrl + code, httpOptions)
      .pipe(
        tap(_ => this.log('listagem de indices obtidas com sucesso!', 'success')),
        catchError(this.handleError<IndiceEntity[]>('obter listagem indices', []))
      );
  }

  
  /** GET countries from the server */
  getCountries(): Observable<CountryEntity[]> {

    /*const token = this.oauthService.getAccessToken();
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': 'Bearer ' + token })
    };*/

    const httpOptions = {
      headers: new HttpHeaders({ 'Access-Control-Allow-Origin':'*' })
    };

    return this.http.get<CountryEntity[]>(this.countriesApiUrl, httpOptions)
      .pipe(
        tap(_ => this.log('listagem de countries obtidas com sucesso!', 'success')),
        catchError(this.handleError<CountryEntity[]>('obter listagem countries', []))
      );
  }

  /** Log a IndiceService message with the MessageService */
  private log(message: string, type: string) {
    // this.messageService.clear();
    // this.messageService.add(message, type);
    console.log(type + ': ' + message);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(operation + ' falhou - ' +  error.message, 'error');
      this.log(operation + ' falhou.', 'error');

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
