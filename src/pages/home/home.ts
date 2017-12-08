import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Eve1Page } from '../eve1/eve1';
import { Eve2Page } from '../eve2/eve2';
import { Eve3Page } from '../eve3/eve3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  eve1(){
    this.navCtrl.push(Eve1Page);
  }
  eve2() {
    this.navCtrl.push(Eve2Page);
  }
  
  eve3() {
    this.navCtrl.push(Eve3Page);
  }
}
