
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from 'src/app/interfaces/user';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  login(user: User){
    return this.afa.signInWithEmailAndPassword(user.email, user.password)
  }

  register(user:User){
    return this.afa.createUserWithEmailAndPassword(user.email, user.password);
  }

  logout(){

  }

  getAuth(){
    return this.afa;
  }
}
