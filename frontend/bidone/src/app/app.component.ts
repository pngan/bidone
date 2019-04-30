import { Component, OnInit } from '@angular/core';
import { elementEventFullName } from '@angular/core/src/view';
import { RestService } from './rest.service';

export interface IFullName {
  firstName: string;
  lastName: string;
}

class FullName implements IFullName {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  firstName: string;
  lastName: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bidone';

  firstName: string;
  lastName: string;
  name: IFullName = new FullName('', '');
  constructor(private restService: RestService) {
  }

  ngOnInit() {
    this.firstName = '';
    this.lastName = '';
  }
  doSubmit(): void {
    this.restService.submitName(new FullName(this.firstName, this.lastName))
    .subscribe((response: string) => {
      console.log(`Response = %o`, response);
    });
  }
}
