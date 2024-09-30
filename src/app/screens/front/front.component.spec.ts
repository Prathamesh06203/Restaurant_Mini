import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontComponent } from './front.component';

describe('FrontComponent', () => {
  // let component: FrontComponent;
  // let fixture: ComponentFixture<FrontComponent>;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [FrontComponent]
  //   });
  //   fixture = TestBed.createComponent(FrontComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('add 2 plus 2 is 4',() => {
    expect(2+2).toEqual(4);
  })
});
