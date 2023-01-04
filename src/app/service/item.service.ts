import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly applicationUrl: string;

  constructor(private http: HttpClient) {
    this.applicationUrl = `${environment.backendUrl}/items`;
  }

  getItems(): Observable<any> {
    return this.http.get(this.applicationUrl);
  }
}
