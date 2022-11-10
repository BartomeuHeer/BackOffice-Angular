import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainroutesComponent } from './mainroutes.component';

describe('MainroutesComponent', () => {
  let component: MainroutesComponent;
  let fixture: ComponentFixture<MainroutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainroutesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainroutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
