import { Component } from '@angular/core';
import { iPost } from '../../Models/post';
import { iJSONresponse } from '../../Models/jsonresponse';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  arrPost: iPost[] = [];

  ngOnInit() {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((res) => {
        console.log(res);

        this.arrPost = res.posts.filter((post) => !post.active);
      })
      .catch((err) => console.log(err));
  }
}
