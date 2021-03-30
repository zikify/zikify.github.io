import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonjourPseudoComponent } from './bonjour-pseudo.component';

describe('BonjourPseudoComponent', () => {
  let component: BonjourPseudoComponent;
  let fixture: ComponentFixture<BonjourPseudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonjourPseudoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonjourPseudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
