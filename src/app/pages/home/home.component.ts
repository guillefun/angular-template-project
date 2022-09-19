import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../core/services/example/example.service';
import { User } from '../../core/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  date: Date = new Date();

  constructor(private exampleService: ExampleService) { }

  ngOnInit() {
    this.date = new Date();
    this.user = this.exampleService.getRandomUser();
  }

}
