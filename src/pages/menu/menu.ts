import { MateriaPage } from './../materia/materia';
import { MateriasRest } from './../../services/materiasrest';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * SUERTE SI SE PUEDE
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  nombre_user:any;
  photo_user:any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public materiasrest: MateriasRest,
    public menuCtrl: MenuController) {
      this.menuCtrl.enable(true, 'mainMenu');
      this.nombre_user=navParams.get("nombre");
      this.photo_user=navParams.get("photo");
  }

  goMat(): void {
    this.navCtrl.push(MateriaPage, {
    });
  }
  onPageWillEnter() {
    console.log('Enter on Page');
  }

}
