import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickReviewerComponent } from './pick-reviewer.component';

describe('PickReviewerComponent', () => {
  let component: PickReviewerComponent;
  let fixture: ComponentFixture<PickReviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickReviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickReviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
