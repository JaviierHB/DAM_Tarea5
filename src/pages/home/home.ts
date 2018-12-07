import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { ApiRest } from '../../services/apirest';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre: any;
  photo: any;
  private credentials: any = {
    nc: '',
    pass: ''
  };

  constructor(
    public navCtrl: NavController,
    public apirest: ApiRest,
       public menuCtrl: MenuController,
       public storage: Storage) {
        this.apirest.getUsers();
        this.menuCtrl.enable(false, 'mainMenu');
  }

  goToOtherPage(): void {
    console.log("Inserting User: " + this.credentials.nc);
    console.log("Inserting Password: " + this.credentials.pass);
    console.log("JSON users: " + this.apirest.alumnos.toString());
    let isUser = false;
    this.apirest.alumnos.forEach(element => {
      if (this.credentials.nc == element.user && this.credentials.pass == element.password) {
        alert("válido");
        isUser = true;
        this.storage.set('nc', element.nc);
        this.navCtrl.push(MenuPage, {
          //nombre: element.nombre,
        });
      }
    });
    if (!isUser) {
      alert("Error invalido");
    }
  }
  ionViewDidLoad() {
    console.log('Enter on Page');
  }
}
