import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringArtsComponent } from './engineering-arts.component';

describe('EngineeringArtsComponent', () => {
  let component: EngineeringArtsComponent;
  let fixture: ComponentFixture<EngineeringArtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EngineeringArtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineeringArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
