import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmFormComponent } from './prm-form.component';

describe('PrmFormComponent', () => {
  let component: PrmFormComponent;
  let fixture: ComponentFixture<PrmFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrmFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrmFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
