import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import { Post } from "./data";


@Injectable()
export class DataService {

    constructor(public http : Http) {
        console.log('Data Service COnnected');
    }

    getPosts(){
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
        .map(res => res.json())
    }
}