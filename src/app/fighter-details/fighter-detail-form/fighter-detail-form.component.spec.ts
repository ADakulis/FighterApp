import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterDetailFormComponent } from './fighter-detail-form.component';

describe('FighterDetailFormComponent', () => {
  let component: FighterDetailFormComponent;
  let fixture: ComponentFixture<FighterDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FighterDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FighterDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
