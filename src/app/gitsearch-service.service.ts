import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitsearchServiceService {
  apiUrl = environment.apiUrl;
  private username: string;
  private repo: string;

  constructor(private http: HttpClient) {
    console.log("ready");
    this.username = "edwinkim16";
    this.repo = "";
  }
}