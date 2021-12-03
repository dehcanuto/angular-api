import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../shared/objects/heroes';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public heroesflow: Heroes;
  public loading: boolean = true;
  public paginacao: Array<any>;

  constructor(
    protected apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    var pageCurrent = this.route.snapshot.queryParams.page;
    if (!pageCurrent) pageCurrent = 1;
    this.list(pageCurrent);
  }

  list(page) {
    this.apiService.listHeroes().subscribe((callback: any) => {
      console.log('listHeroes', callback);
      this.heroesflow = callback;
      this.loading = false;
    });
  }
}
