import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldenBetsComponent } from './golden-bets.component';

describe('GoldenBetsComponent', () => {
  let component: GoldenBetsComponent;
  let fixture: ComponentFixture<GoldenBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoldenBetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoldenBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
