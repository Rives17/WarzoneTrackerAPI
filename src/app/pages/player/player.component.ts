import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Br } from 'src/app/interfaces/player';
import { StatsService } from 'src/app/services/stats.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  public players: Observable<any>[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private statsService: StatsService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
      switchMap( ({platform, username}) => this.statsService.getMatches(platform, encodeURIComponent(username)))
    )
      .subscribe(resp => {
        console.log(resp);
      });
  }
}
