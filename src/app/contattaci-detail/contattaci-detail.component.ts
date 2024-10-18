import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contattaci-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    FooterComponent
  ],
  templateUrl: './contattaci-detail.component.html',
  styleUrl: './contattaci-detail.component.scss'
})
export class ContattaciDetailComponent {

  email: string = '';
  name: string = '';
  message: string = '';
  telefono: string = '';

  submitForm() {
    // Gestisci la logica del form qui
    console.log('Form Submitted', this.name, this.email, this.message);
  }

}
