import { Component, OnInit } from '@angular/core';
import { GitsearchServiceService } from '../gitsearch-service.service';
import { HttpClient } from '@angular/common/http';
import {environment } from '../../environments/environment';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  user!: any;
  repos!: any[];
  username!: string;

  constructor(private gitsearchService: GitsearchServiceService,
    private http:HttpClient) { }

    findUser() {
     
      this.gitsearchService.getUser(this.username).subscribe((data) => {
    
      
        // console.table(data)
           return this.user=data;
          
        },(error: any) =>{
          console.log(error);
          }
      )
    }

    findRepo() {
      // this.gitsearchService.updateUser(this.username);
      this.gitsearchService.getRepos(this.username).subscribe((data) => {
    
       this.repos=data
        // console.log(this.repos)
          return this.repos=data;
          
        },(error: any) =>{
          console.log(error);
          }
      )
    }

  ngOnInit(): void {
  }

}
