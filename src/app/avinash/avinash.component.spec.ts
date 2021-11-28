import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvinashComponent } from './avinash.component';

describe('AvinashComponent', () => {
  let component: AvinashComponent;
  let fixture: ComponentFixture<AvinashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvinashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvinashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
