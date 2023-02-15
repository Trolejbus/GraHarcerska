import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../../@core/data/smart-table';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styleUrls: ['./smart-table.component.scss'],
})
export class SmartTableComponent {

  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false,
    },
    columns: {
      firstName: {
        title: 'Imie',
        type: 'string',
      },
      lastName: {
        title: 'Nazwisko',
        type: 'string',
      },
      ssn: {
        title: 'Numer ubezpieczenia',
        type: 'string'
      },
      city: {
        title: 'Miasto',
        type: 'string',
        filter: false
      },
      phone: {
        title: 'Numer telefonu',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableData, private router: Router) {
    const data = this.service.getData();
    this.source.load(data);
  }

  rowSelected(event): void {
    console.log(event);
    this.router.navigate([`pages/layout/accordion/${event.data.id}`])
  }
}
