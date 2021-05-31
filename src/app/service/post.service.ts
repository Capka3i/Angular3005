import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Post} from "../Interface/Post";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private httpClient: HttpClient) {
  }

  getPost(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)
  }
}
