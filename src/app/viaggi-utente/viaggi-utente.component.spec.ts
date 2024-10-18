import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViaggiUtenteComponent } from './viaggi-utente.component';

describe('ViaggiUtenteComponent', () => {
  let component: ViaggiUtenteComponent;
  let fixture: ComponentFixture<ViaggiUtenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViaggiUtenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViaggiUtenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
