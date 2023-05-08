import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  gametarg!: string;
  platform!: string;

  constructor(private router: Router,
              private statsService: StatsService){}

  radioChangeHandler(event: any){
    this.platform = event.target.value;
  }

  searchPlayer() {
    console.log(this.gametarg);
    console.log(this.platform);

    this.statsService.getMatches(this.platform, this.gametarg )
  };
}