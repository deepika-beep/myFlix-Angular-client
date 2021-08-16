import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserProfileUpdateComponent } from './user-profile-update/user-profile-update.component';
import { UserProfileDeleteComponent } from './user-profile-delete/user-profile-delete.component';
import { MovieDirectorComponent } from './movie-director/movie-director.component';
import { MovieGenreComponent } from './movie-genre/movie-genre.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const appRoutes: Routes =[
  {path: 'welcome',component:WelcomePageComponent},
  {path: 'movies' ,component:MovieCardComponent},
  { path: 'profile', component: UserProfileComponent},
  {path: '',redirectTo:'welcome', pathMatch:'prefix'},
];
@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    UserProfileComponent,
    UserProfileComponent,
    NavBarComponent,
    MovieDirectorComponent,
    MovieGenreComponent,
    NavBarComponent,
    UserProfileDeleteComponent,
    UserProfileUpdateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
     MatIconModule,
     MatCardModule,
     MatFormFieldModule,
     MatDialogModule,
     MatSnackBarModule,
     FormsModule,
     MatIconModule,
     RouterModule.forRoot(appRoutes),
    MDBBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
