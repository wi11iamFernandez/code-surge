import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGlobalAppComponent } from './header-global-app.component';

describe('HeaderGlobalAppComponent', () => {
  let component: HeaderGlobalAppComponent;
  let fixture: ComponentFixture<HeaderGlobalAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGlobalAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGlobalAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
