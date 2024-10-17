import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContattaciDetailComponent } from './contattaci-detail.component';

describe('ContattaciDetailComponent', () => {
  let component: ContattaciDetailComponent;
  let fixture: ComponentFixture<ContattaciDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContattaciDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContattaciDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
