import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAtelierComponent } from './card-atelier.component';

describe('CardAtelierComponent', () => {
  let component: CardAtelierComponent;
  let fixture: ComponentFixture<CardAtelierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAtelierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAtelierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
