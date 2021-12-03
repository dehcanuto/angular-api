import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projetos } from 'src/app/shared/objects/projetos';
import { AdmService } from 'src/app/shared/service/adm.service';

@Component({
  selector: 'single-view',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css'],
})
export class viewComponent implements OnInit {
  public iDproj: number;
  public Single: Projetos;
  public loading: boolean;

  constructor(
    protected admService: AdmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.iDproj = this.route.snapshot.params['id'];
    this.single(this.iDproj);
    this.loading = true;
  }

  single(id: number) {
    this.admService.projSingle(id).subscribe((callback: any) => {
      this.Single = callback;
      this.loading = false;
      console.log('Single', this.Single);
    });
  }
}
