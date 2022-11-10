import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormroutesComponent } from './formroutes.component';

describe('FormroutesComponent', () => {
  let component: FormroutesComponent;
  let fixture: ComponentFixture<FormroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormroutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
