import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamHomePage } from '../pages';

import { EliteApi } from '../../shared/shared';

import * as _ from 'lodash';
import { take } from 'rxjs/operators/take';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  private allTeams: any;
  private allTeamDivisions: any;
  teams: any = [];

  constructor(private nav: NavController, 
    private navParams: NavParams, 
    private eliteApi: EliteApi,
    private loadingController: LoadingController) {}

  itemTapped($event, team){
    this.nav.push(TeamHomePage, team);
  }

  ionViewDidLoad(){
    let selectedTourney = this.navParams.data;

    let loader = this.loadingController.create({
      content: 'Getting data...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions = 
            _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
            .value();
  
        this.teams = this.allTeamDivisions;
        loader.dismiss();
    });
    
    })
  }
}
