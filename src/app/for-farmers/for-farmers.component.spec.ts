import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForFarmersComponent } from './for-farmers.component';

describe('ForFarmersComponent', () => {
  let component: ForFarmersComponent;
  let fixture: ComponentFixture<ForFarmersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForFarmersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForFarmersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
