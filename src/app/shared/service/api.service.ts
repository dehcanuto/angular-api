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
    const md5 = new Md5();
    const hash = md5.create();

    hash.update(
      timestamp + this.enviroment.privateKey + this.enviroment.publicKey
    );

    return this.http.get<Heroes[]>(
      `${
        this.enviroment.apiUrl
      }/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${
        this.enviroment.publicKey
      }&hash=${hash.hex()}`
    );
  }
}
