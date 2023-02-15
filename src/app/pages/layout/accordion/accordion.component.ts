import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { from } from 'rxjs';
import { map, tap, withLatestFrom } from 'rxjs/operators';
import { SmartTableService } from '../../../@core/mock/smart-table.service';

@Component({
  selector: 'ngx-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
})
export class AccordionComponent {

  @ViewChild('item', { static: true }) accordion;

  source: LocalDataSource = new LocalDataSource();
  
  public vm$ = this.route.params.pipe(
    map(p => this.service.data.find(d => d.id === Number(p.id))),
  );

  constructor(
    private route: ActivatedRoute,
    private service: SmartTableService,
  ) {

  }

  toggle() {
    this.accordion.toggle();
  }
}
