import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailViaggiComponent } from './detail-viaggi.component';

describe('DetailViaggiComponent', () => {
  let component: DetailViaggiComponent;
  let fixture: ComponentFixture<DetailViaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailViaggiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailViaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
