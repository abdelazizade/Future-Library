import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalBooksComponent } from './external-books.component';

describe('ExternalBooksComponent', () => {
  let component: ExternalBooksComponent;
  let fixture: ComponentFixture<ExternalBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExternalBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExternalBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
