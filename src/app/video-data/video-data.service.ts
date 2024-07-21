import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<unknown> {
    return this.http.get("assets/data.json");
  }
}