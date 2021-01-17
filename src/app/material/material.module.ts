import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatButtonModule, MatNativeDateModule, MatIconModule, MatCheckboxModule, MatSelectModule,
  MatSidenavModule, MatListModule, MatToolbarModule, MatInputModule,
  MatPaginatorModule, MatCardModule, MatProgressSpinnerModule, MatTabsModule, MatAutocompleteModule} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule,
    MatNativeDateModule, MatIconModule, MatCheckboxModule, MatSelectModule,
    MatSidenavModule, MatListModule, MatTableModule, MatTabsModule, MatPaginatorModule, MatCardModule, MatProgressSpinnerModule, MatAutocompleteModule],

  exports: [CommonModule, MatButtonModule, MatToolbarModule, MatInputModule,
    MatNativeDateModule, MatIconModule, MatCheckboxModule, MatSelectModule,
    MatSidenavModule, MatListModule, MatTableModule, MatTabsModule, MatPaginatorModule, MatCardModule, MatProgressSpinnerModule, MatAutocompleteModule],
})
export class CustomMaterialModule { }
