import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent{

  public gametarg!: string;
  public platform!: string;

  constructor(private router: Router,
              private statsService: StatsService){}

  radioChangeHandler(event: any){
    this.platform = event.target.value;
  }

  searchPlayer() {
    console.log(this.gametarg);
    console.log(this.platform);

    this.statsService.getMatches(this.platform, encodeURIComponent(this.gametarg))

    this.router.navigateByUrl(`api/player/${this.platform}/${encodeURIComponent(this.gametarg)}`)
  };

}
