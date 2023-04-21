import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { blogpost } from '../app/blogPost/blogpost';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  fetchProduct() {
    return this.http
      .get<{ [key: string]: blogpost }>(
        'https://jsonplaceholder.typicode.com/posts'
      )
      .pipe(
        map((res) => {
          const posts = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) posts.push({ ...res[key], id: key });
          }
          return posts;
        })
      );
  }
  deleteProduct(id: number) {
    this.http
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`).subscribe()
      ;
  }
}
