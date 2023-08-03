import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForNgoComponent } from './for-ngo.component';

describe('ForNgoComponent', () => {
  let component: ForNgoComponent;
  let fixture: ComponentFixture<ForNgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForNgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForNgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
