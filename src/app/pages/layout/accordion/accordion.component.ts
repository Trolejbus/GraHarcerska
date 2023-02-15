import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SmartTableService } from '../../../@core/mock/smart-table.service';

@Component({
  selector: 'ngx-accordion',
  templateUrl: 'accordion.component.html',
  styleUrls: ['accordion.component.scss'],
})
export class AccordionComponent {

  @ViewChild('item', { static: true }) accordion;

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
