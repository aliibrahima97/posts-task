import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/interfaces/posts';
import { PostsService } from 'src/app/services/posts.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {

  userId:number

  constructor(config: NgbModalConfig, private modalService: NgbModal,private route: ActivatedRoute,private PostsS:PostsService) { 
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    this.userId = 0
  }
  
  avatar:string = ''

  post: Posts[]= [];
  
  total:number = 0

  //get posts
  getPosts(){
    this.PostsS.doGet().subscribe(posts=>{
      this.post = posts 
      this.total = this.post.length
    })
  }

  ngOnInit(): void {
    this.getPosts()
    this.route.paramMap.subscribe(params => this.userId = Number(params.get('id')))
    this.avatar = `assets/imgs/${this.userId}.jpg`
  }

  p: number = 1;

  //open add new post modal
  openAdd(content:any) {
    this.modalService.open(content);
  }

  done:boolean = false

  //add new post
  addNew(f:NgForm) {
    let title = (<Posts>f.value).title as string,
    body = (<Posts>f.value).body as string;
    this.PostsS.doPost(this.userId,title,body).then(()=> {
        this.done = true
        setTimeout(() => {
          this.done = false
        }, 4000);
        this.getPosts()
      }
    )
  }

  deleted:boolean = false
  
  //delete post
  deletePost(id:number){
    this.PostsS.doDelete(id).then(()=>{
      this.deleted = true
        setTimeout(() => {
          this.deleted = false
        }, 4000);
        this.getPosts()
    })
  }

  title:string =""
  body:string = ""
  id:number = 0

  //open edit modal
  openEdit(content2:any,id:number,title:string,body:string) {
    this.title = title
    this.body = body
    this.id = id
    this.modalService.open(content2);
  }

  submit:boolean = false
  //show edit's form submit
  showSubmit(){
    this.submit = true
  }

  edited:boolean = false
  
  //edit post
  editPost(){
    this.PostsS.doPut(this.id,this.userId,this.title,this.body).then(()=>{
      this.edited = true
      setTimeout(() => {
        this.edited = false
      }, 5000);
      this.getPosts()
    })
  }
}
