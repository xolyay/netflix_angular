import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsInfantilComponent } from './films-infantil.component';

describe('FilmsInfantilComponent', () => {
  let component: FilmsInfantilComponent;
  let fixture: ComponentFixture<FilmsInfantilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsInfantilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsInfantilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
