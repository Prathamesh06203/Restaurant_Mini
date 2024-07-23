import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegustrationComponent } from './regustration.component';

describe('RegustrationComponent', () => {
  let component: RegustrationComponent;
  let fixture: ComponentFixture<RegustrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegustrationComponent]
    });
    fixture = TestBed.createComponent(RegustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
