import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  username!: string;
  platform!: string;

  constructor(private router: Router,
              private statsService: StatsService){}

  radioChangeHandler(event: any){
    this.platform = event.target.value;
  }

  searchPlayer() {
    console.log(this.username);
    console.log(this.platform);

    this.statsService.getMatches(this.platform, this.username )
    // this.statsService.getMatches(this.gametarg, this.platform)
    // this.router.navigate([`home/player/${this.gametarg.trim()}/${this.platform}`])
  };
}