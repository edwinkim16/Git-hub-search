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

  constructor() { }

  ngOnInit(): void {
  }

}
