import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UserPostsComponent } from './views/user-posts/user-posts.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'user-posts/:id', component:UserPostsComponent},
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
