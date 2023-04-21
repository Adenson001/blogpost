import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { blogpost } from './blogPost/blogpost';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'bposts';
  allPosts: blogpost[] = [];

  constructor(private http: HttpClient, private PostService: PostService) {}
  ngOnInit() {
    this.fetchPosts();
  }

  // onPostsFetch() {
  //   this.fetchPosts();
  // }

  private fetchPosts() {
    this.PostService.fetchProduct().subscribe((posts) => {
      this.allPosts = posts;
    });
  }

  onDeletePost(id: number) {
    // this.allPosts.splice(id - 1, 1);

    // this.allPosts.filter((i) => i.id === id);
    const index = this.allPosts.findIndex((post) => post.id === id);
    this.allPosts.splice(index, 1);

    this.PostService.deleteProduct(id);

    // this.PostService.deleteProduct(id).subscribe(() => {
    //   const index = this.allPosts.findIndex((post) => post.id === id);
    //   this.allPosts.splice(index, 1);
    // });
  }
}
