import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListViaggiComponent } from './list-viaggi.component';

describe('ListViaggiComponent', () => {
  let component: ListViaggiComponent;
  let fixture: ComponentFixture<ListViaggiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListViaggiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListViaggiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
