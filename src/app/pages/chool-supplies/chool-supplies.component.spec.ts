import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoolSuppliesComponent } from './chool-supplies.component';

describe('ChoolSuppliesComponent', () => {
  let component: ChoolSuppliesComponent;
  let fixture: ComponentFixture<ChoolSuppliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoolSuppliesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoolSuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
