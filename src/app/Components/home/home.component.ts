import { Component, OnInit } from '@angular/core';
import { iJSONresponse } from '../../Models/jsonresponse';
import { iPost } from '../../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  primoPost!: iPost;
  arrPosts: iPost[] = [];

  ngOnInit(): void {
    fetch('db.json')
      .then((res) => <Promise<iJSONresponse>>res.json())
      .then((res) => {
        console.log(res);

        this.primoPost = res.posts[0];
        this.arrPosts = res.posts.slice(1, 5);
      })
      .catch((err) => console.log(err));
  }
}
