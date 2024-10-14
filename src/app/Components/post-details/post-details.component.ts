import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { iPost } from '../../Models/post';
import { iJSONresponse } from '../../Models/jsonresponse';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent {
  post!: iPost;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      fetch('db.json')
        .then((res) => res.json() as Promise<iJSONresponse>)
        .then((res) => {
          const found = res.posts.find((p) => p.id == Number(params['id']));

          if (found) {
            this.post = found;
          } else {
            console.log('Post not found');
          }
        });
    });
  }
}
