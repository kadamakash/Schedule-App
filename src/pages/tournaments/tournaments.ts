import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MyTeamsPage, TeamsPage } from '../pages';

import { EliteApi } from '../../shared/shared';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any = [];

  constructor(private nav: NavController, private eliteApi: EliteApi, private loadingController: LoadingController) {
  }

  itemTapped($event, tourney){
    this.nav.push(TeamsPage, tourney);
  }

  //  when first time the page is loaded it will make an http call to get the tournaments however 
  //  if the view is shown on back navigation it won't again make an http request to fetch the data
  ionViewDidLoad(){
    let loader = this.loadingController.create({
      content: 'Getting tournaments...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        console.log(data);
        this.tournaments = data; 
        loader.dismiss();
      })
    })
    
    
  }


}
