import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterEditFormComponent } from './fighter-edit-form.component';

describe('FighterEditFormComponent', () => {
  let component: FighterEditFormComponent;
  let fixture: ComponentFixture<FighterEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FighterEditFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
