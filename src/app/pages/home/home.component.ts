import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../../core/services/example/example.service';
import { User } from '../../core/models/user.model';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import {MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;
  date: Date = new Date();

  constructor(
    private exampleService: ExampleService,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.date = new Date();
    this.user = this.exampleService.getRandomUser();
  }

  openModal(){
    const emailHasBeenSent: MatDialogRef<ModalComponent> = this.dialog.open(ModalComponent, {
      data: {
        title: "Testing modal",
        /* eslint-disable max-len */
        message: "This is a test for modal components",
        buttons: [],
      },
    });
    setTimeout(() => {
      emailHasBeenSent.close();
    }, 6000);
  }

}
