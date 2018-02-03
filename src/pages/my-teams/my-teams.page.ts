import { Component } from "@angular/core/src/metadata/directives";
import { NavController } from 'ionic-angular';

import { TournamentsPage } from '../pages';

@Component({
    templateUrl: 'build/pages/my-teams/my-teams.page.html'
})

export class MyTeamsPage{

    constructor(private nav: NavController){}

    goToTournaments(){
        this.nav.push(TournamentsPage);
    }
}
