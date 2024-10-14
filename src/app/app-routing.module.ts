import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ActivePostsComponent } from './Components/active-posts/active-posts.component';
import { InactivePostsComponent } from './Components/inactive-posts/inactive-posts.component';
import { PostDetailsComponent } from './Components/post-details/post-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'active-posts',
    component: ActivePostsComponent,
  },
  {
    path: 'inactive-posts',
    component: InactivePostsComponent,
  },
  {
    path: 'post-details/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
