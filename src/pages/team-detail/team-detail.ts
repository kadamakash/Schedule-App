import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MyTeamsPage } from '../pages';

/**
 * Generated class for the TeamDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  team: any;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('**navparams:', this.navParams);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamDetailPage');
  }

  goHome(){
    //this.nav.push(MyTeamsPage);
    console.log('**parent', this.nav.parent);
    this.nav.parent.parent.popToRoot();
  }



}