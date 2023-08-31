import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddUsers, DeleteUsers, GetUsers, UpdateUsers } from '../actions/app.actions';
import { AppState } from '../state/app.state';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit, Extracted {

  //Here I have used Reactive Form, you can also use Template Driven Form instead
  userForm: any;
  userInfo: any;
  @Select(AppState.selectStateData) userInfo$: any;

  constructor(private store: Store, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: [''],
      phone: [''],
      website: ['']
    })

    this.store.dispatch(new GetUsers());

    this.userInfo$.subscribe((returnData: any) => {
      this.userInfo = returnData;
    })
  }

  addUser() {
    this.store.dispatch(new AddUsers(this.userForm.value));
    // this.userForm.reset();
  }

  updateUser(id:any, i:any) {

    const newData = {
      id: id,
      name: "Indumathi Gunturu",
      username: "Indu",
      email: 'indugunturu12@gmail.com',
      phone: '+46-767452731',
      website: 'samplewebsite.com'
    }

    this.store.dispatch(new UpdateUsers(newData, id, i));
  }

  deleteUser(i:any) {
    this.store.dispatch(new DeleteUsers(i));
  }
}



interface Extracted {
  userForm: FormGroup | undefined;
  userInfo: any;
  userInfo$: Observable<any>;
  ngOnInit(): void;
  /* TODO: add the missing return type */
  addUser(): any;
  /* TODO: add the missing return type */
  updateUser(id:any, i:any): any;
  /* TODO: add the missing return type */
  deleteUser(i:any): any;
}
