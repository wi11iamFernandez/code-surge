import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ApiService } from '../services/api.service';
import { ViaggiService } from '../services/viaggi.service';
import { ToggleService } from '../services/toggle.service';

@Component({
  selector: 'app-filter-viaggi',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, ReactiveFormsModule, CommonModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './filter-viaggi.component.html',
  styleUrl: './filter-viaggi.component.scss'
})
export class FilterViaggiComponent {

  filterForm: FormGroup;
  datePipe = new DatePipe("en-US");

  constructor(private fb: FormBuilder, private apiService: ApiService, private viaggiService: ViaggiService, private toggleService: ToggleService) {
    this.filterForm = this.fb.group({
      nazione: [''],
      area: [''],
      luogo_partenza: [''],
      luogo_arrivo: [''],
      data_partenza: [''],
      data_arrivo: [''],
      costo: ['']
    });
  }

  applyFilters() {
    const filters = this.filterForm.value;

    // Formattiamo la data di partenza e di arrivo nel formato "yyyy-MM-dd"
    filters.data_partenza = this.datePipe.transform(filters.data_partenza, 'yyyy-MM-dd');
    filters.data_arrivo = this.datePipe.transform(filters.data_arrivo, 'yyyy-MM-dd');

    this.apiService.getViaggiFilter(filters).subscribe({
      next: (data) => {
        this.viaggiService.setViaggi(data);
        this.toggleService.setListaViaggi(data);
      },
      error: (err) => {
        console.error('Errore durante il caricamento dei viaggi:', err);
        this.toggleService.setListaViaggi([]);
      }
    });
  }

}
