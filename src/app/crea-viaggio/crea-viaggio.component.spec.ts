import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaViaggioComponent } from './crea-viaggio.component';

describe('CreaViaggioComponent', () => {
  let component: CreaViaggioComponent;
  let fixture: ComponentFixture<CreaViaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreaViaggioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreaViaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
