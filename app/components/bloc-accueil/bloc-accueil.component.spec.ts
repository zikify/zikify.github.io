import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocAccueilComponent } from './bloc-accueil.component';

describe('BlocAccueilComponent', () => {
  let component: BlocAccueilComponent;
  let fixture: ComponentFixture<BlocAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
