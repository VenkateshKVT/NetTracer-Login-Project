import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiesterFormComponent } from './register-form.component';

describe('RegiesterFormComponent', () => {
  let component: RegiesterFormComponent;
  let fixture: ComponentFixture<RegiesterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegiesterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegiesterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
