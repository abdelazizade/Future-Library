import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligenceGamesComponent } from './intelligence-games.component';

describe('IntelligenceGamesComponent', () => {
  let component: IntelligenceGamesComponent;
  let fixture: ComponentFixture<IntelligenceGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntelligenceGamesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntelligenceGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
