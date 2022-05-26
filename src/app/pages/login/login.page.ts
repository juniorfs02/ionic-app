import { AuthService } from './../../services/auth.service';
import { Keyboard } from '@awesome-cordova-plugins/keyboard/ngx';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { LoadingController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public userLogin: User = {};
  public userRegister: User = {};
  private loading: any;
  
  constructor(public keyboard: Keyboard,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private AuthService: AuthService
    ) { }

  ngOnInit() {
    this.keyboard
  }

  async login(){
    await this.presentLoading();

    try{
      await this.AuthService.login(this.userLogin);
    }catch(error){
      let message:string;

      switch (error.code){
        case 'auth/user-not-found':
          message = 'E-mail ou senha estão incorretos.';
          break;
      }

      this.presentToast(message);
    } finally{
      this.loading.dismiss();
    }
}

  async register(){
    await this.presentLoading();

    try{
      await this.AuthService.register(this.userRegister);
    }catch(error){
      let message: string;

      switch(error.code){
        case 'auth/email-already-in-use':
          message = 'Este email já foi usado, tente um outro!';
          break;
        
        case 'auth/invalid-email':
        message = 'Este email é inválido!';
        break;

      }
      this.presentToast(message);
    }finally{
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({
      cssClass: 'my-custom-class',
      message: 'Aguarde...'
    });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000
    });
    toast.present();
  }

}
