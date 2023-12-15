import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzoComponeneteComponent } from './terzo-componenete.component';

describe('TerzoComponeneteComponent', () => {
  let component: TerzoComponeneteComponent;
  let fixture: ComponentFixture<TerzoComponeneteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerzoComponeneteComponent]
    });
    fixture = TestBed.createComponent(TerzoComponeneteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
