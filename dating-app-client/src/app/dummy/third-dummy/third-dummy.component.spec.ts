import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdDummyComponent } from './third-dummy.component';

describe('ThirdDummyComponent', () => {
  let component: ThirdDummyComponent;
  let fixture: ComponentFixture<ThirdDummyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdDummyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
