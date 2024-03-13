import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../PojoClassess/UserDetails';
import { UserService } from '../UserService';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list-component',
  templateUrl: './user-list-component.component.html',
  styleUrls: ['./user-list-component.component.css']
})
export class UserListComponentComponent implements OnInit {

  isLoading = true;
  userDetails: UserDetails[];

  listOfUser: UserDetails[];

  filterName = '';
  filterEmail = '';

  isError = false;

  constructor(private userService: UserService, private messageService: MessageService, private routerService: Router) { }

  ngOnInit(): void {

    //The method will fetch the data
    this.userService.fetUserData(
      (data: UserDetails[]) => {
        this.isError = false;
        this.userDetails = data;
        this.listOfUser = data;
        this.isLoading = false;
        this.messageService.add({ severity: 'success', summary: 'Data received', detail: 'Data successfully retrieved' });
      },
      () => {
        this.isError = true;
        this.isLoading = false;
        this.messageService.add({ severity: 'error', summary: 'Something went wrong', detail: 'Please check your internet' });
      }
    );
  }

  //The method is for filter
  applyFilters() {
    console.log(this.filterName, this.filterEmail);
    this.listOfUser = this.userDetails.filter(user => {
      return user.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
        user.email.toLowerCase().includes(this.filterEmail.toLowerCase());

    });
  }

    //The method is for reset
  resetFilter() {
    this.listOfUser = this.userDetails;
    this.filterEmail = '';
    this.filterName = '';
  }

  //The method is for back
  onBack() {
    this.routerService.navigate(['']);
  }

}
