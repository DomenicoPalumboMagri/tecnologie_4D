import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuartoComponeneteComponent } from './quarto-componenete.component';

describe('QuartoComponeneteComponent', () => {
  let component: QuartoComponeneteComponent;
  let fixture: ComponentFixture<QuartoComponeneteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuartoComponeneteComponent]
    });
    fixture = TestBed.createComponent(QuartoComponeneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
