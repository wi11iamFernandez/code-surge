import { Component } from '@angular/core';
import { FilterViaggiComponent } from '../filter-viaggi/filter-viaggi.component';
import { ListViaggiComponent } from '../list-viaggi/list-viaggi.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-detail-viaggi',
  standalone: true,
  imports: [FilterViaggiComponent, ListViaggiComponent, FooterComponent],
  templateUrl: './detail-viaggi.component.html',
  styleUrl: './detail-viaggi.component.scss'
})
export class DetailViaggiComponent {

}
