import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../shared/objects/heroes';
import { ApiService } from '../../shared/service/api.service';

@Component({
  selector: 'single-view',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class SingleComponent implements OnInit {
  public iDproj: number;
  public Single: Heroes;
  public loading: boolean;

  constructor(
    protected apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.iDproj = this.route.snapshot.params['id'];
    this.single(this.iDproj);
    this.loading = true;
  }

  single(id: number) {
    this.apiService.heroSingle(id).subscribe((callback: any) => {
      this.Single = callback;
      this.loading = false;
      console.log('Single', this.Single);
    });
  }
}
