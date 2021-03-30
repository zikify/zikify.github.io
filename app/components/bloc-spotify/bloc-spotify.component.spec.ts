import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocSpotifyComponent } from './bloc-spotify.component';

describe('BlocSpotifyComponent', () => {
  let component: BlocSpotifyComponent;
  let fixture: ComponentFixture<BlocSpotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocSpotifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocSpotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
