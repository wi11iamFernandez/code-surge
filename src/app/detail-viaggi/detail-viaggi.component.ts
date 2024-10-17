import { Component } from '@angular/core';
import { FilterViaggiComponent } from '../filter-viaggi/filter-viaggi.component';

@Component({
  selector: 'app-detail-viaggi',
  standalone: true,
  imports: [FilterViaggiComponent],
  templateUrl: './detail-viaggi.component.html',
  styleUrl: './detail-viaggi.component.scss'
})
export class DetailViaggiComponent {

}
