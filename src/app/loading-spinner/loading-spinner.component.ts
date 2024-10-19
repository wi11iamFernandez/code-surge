import { Component } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  isLoading$!: Observable<boolean>;

  constructor(private loadingService: LoadingService) { }

  ngOnInit() {
    // Ora è sicuro accedere al servizio
    this.isLoading$ = this.loadingService.isLoading$;
  }
}
