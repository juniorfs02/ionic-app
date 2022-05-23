
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/interfaces/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: User){

  }

  register(user:User){
  return this.afa.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){

  }

  getAuth(){

  }
}
