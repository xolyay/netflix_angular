import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsFantasyComponent } from './films-fantasy.component';

describe('FilmsFantasyComponent', () => {
  let component: FilmsFantasyComponent;
  let fixture: ComponentFixture<FilmsFantasyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsFantasyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsFantasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
