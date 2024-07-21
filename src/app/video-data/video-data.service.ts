import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonStruct } from '../video-gallery/video-gallery.component';

@Injectable({
  providedIn: 'root'
})
export class VideoDataService {

  constructor(private http: HttpClient) {
  }

  public getJSON(): Observable<JsonStruct> {
    return this.http.get<JsonStruct>("assets/data.json");
  }
}