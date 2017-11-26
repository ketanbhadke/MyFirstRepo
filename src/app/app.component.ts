import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Post } from './services/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle:string = 'Acme Product Management';
  posts: Post[] = [];
  
  myDict1 : Dictionary;
  myDict2 : Dictionary;
  myDict : Dictionary[];
  constructor(private dataService : DataService){
    this.myDict1 = {'key1':'value1','key2':'value2'};
    this.myDict2 = {'k':'ve1','k2':'vue2'};
    this.myDict = [this.myDict1, this.myDict2];
  }

  keys(dict : Dictionary) : Array<string> {
    return Object.keys(dict);
  }

  ngOnInit() {

    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts);
      this.posts = posts;
    });
  }

}

interface Dictionary {
  [ index: string ]: string
}
