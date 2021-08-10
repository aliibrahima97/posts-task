import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interfaces/posts';
import { environment as env} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  doGet() {
    return this.http.get<Posts[]>(`${env.apiRoot}/posts`)
  }

  doPost(
    userId:number,
    title:string,
    body:string
  ){
    return this.http.post(`${env.apiRoot}/posts`,{
      id:null,
      userId:userId,
      title:title,
      body:body
    }).toPromise()
  }

  doDelete(id:number) {
    return this.http.delete(`${env.apiRoot}/posts/${id}`).toPromise()
  }
  
  doPut(
    id:number,
    userId:number,
    title:string,
    body:string
  ) {
    return this.http.put(`${env.apiRoot}/posts/${id}`,{
      id:null,
      userId:userId,
      title:title,
      body:body
    }).toPromise()
  }
}
