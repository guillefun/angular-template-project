import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  makeid(length: number) {
    return Math.random()
    .toString(36)
    .replace('.','')
    .toUpperCase()
    .substr(0, length);
}

  constructor() { }

  getExample(): string {
    return "Example";
  }

  getRandomUser(): User {
    return { username: this.makeid(12), password: this.makeid(12), locale: navigator.language }
  }
}
