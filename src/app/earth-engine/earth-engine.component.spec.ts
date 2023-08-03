import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthEngineComponent } from './earth-engine.component';

describe('EarthEngineComponent', () => {
  let component: EarthEngineComponent;
  let fixture: ComponentFixture<EarthEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EarthEngineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarthEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
