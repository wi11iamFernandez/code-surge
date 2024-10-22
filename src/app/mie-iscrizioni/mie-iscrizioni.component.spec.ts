import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MieIscrizioniComponent } from './mie-iscrizioni.component';

describe('MieIscrizioniComponent', () => {
  let component: MieIscrizioniComponent;
  let fixture: ComponentFixture<MieIscrizioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MieIscrizioniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MieIscrizioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
