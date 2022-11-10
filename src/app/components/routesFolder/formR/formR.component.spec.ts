import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormComponent } from './formR.component';
import { FormComponentR } from './formR.component';

describe('FormComponentR', () => {
  let component: FormComponentR;
  let fixture: ComponentFixture<FormComponentR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponentR ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponentR);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});