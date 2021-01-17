import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import {MatTableDataSource, MatPaginator} from '@angular/material';
import { IndiceService } from '../services/indice.service';
import { CountryEntity } from '../models/country_entity';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.css']
})
export class IndicesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['indicatorId', 'indicatorValue', 'countryId', 'countryValue', 'countryiso3code', 'date', 'value', 'unit', 'obs_status', 'decimal'];

  countries: CountryEntity[];
  
  countryControl = new FormControl();

  dataSource: any;

  isLoading = false;

  constructor(
    private indiceService: IndiceService,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }


  ngOnInit() {
    // carrega combo filtro
   this.indiceService.getCountries().subscribe(res => {
      this.countries = res;
    });
  }

  listarIndices(code: string): void {
    this.indiceService.getIndices(code || 'BRA')
      .subscribe(res => {
        console.log(res);
        this.isLoading = false;
        this.dataSource = new MatTableDataSource(res);
        this.changeDetectorRefs.detectChanges();
      });
  }

  applyFilter(filterValue: string) {
    this.isLoading = true;
    this.listarIndices(filterValue);
  }

}
