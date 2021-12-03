import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { environment } from '../../../environments/environment';
import { Heroes } from '../objects/heroes';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {
  protected headers = new HttpHeaders().set('Content-Type', 'application/json');
  protected enviroment = environment;
  constructor(protected http: HttpClient) {}

  // Lista todos os herois.
  public listHeroes() {
    const timestamp = Number(new Date());
    const hash = new Md5();

    hash.appendStr(
      timestamp + this.enviroment.privateKey + this.enviroment.publicKey
    );

    return this.http.get<Heroes[]>(
      `${
        this.enviroment.apiUrl
      }/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${
        this.enviroment.publicKey
      }&hash=${hash.end()}`
    );
  }

  // TODO: resolver o retorno por id.
  // Ver heroi.
  public heroSingle(id: number) {
    return this.http.get<Heroes[]>(
      `${this.enviroment.apiUrl}/characters?identifies=${id}`
    );
  }
}
