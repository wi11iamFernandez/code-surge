import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterViaggiComponent } from './filter-viaggi.component';

describe('FilterViaggiComponent', () => {
  let component: FilterViaggiComponent;
  let fixture: ComponentFixture<FilterViaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterViaggiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterViaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
