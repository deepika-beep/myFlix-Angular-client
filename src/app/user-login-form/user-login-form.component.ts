import { Component, OnInit,Input } from '@angular/core';
// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
import { FetchApiDataService } from '../fetch-api-data.service';
// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
@Input() userData = { Username: '',Password: '' };
 
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router) { }

  ngOnInit(): void {
  }
  
	// Send the login form inputs to the backend
loginUser(): void {
  this.fetchApiData.userLogin(this.userData).subscribe((response)=>{
    this.dialogRef.close();
    this.router.navigate(['movies']);
    // save user and token in local storage
    localStorage.setItem('token',response.token);
    localStorage.setItem('user',JSON.stringify(response.user));
    console.log(response);
    this.snackBar.open('Success','OK',{
      duration:2000
    })
  },(response)=>{
    this.snackBar.open('Failure','OK',{
      duration:2000
    })
  })
}
}
