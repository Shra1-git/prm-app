import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrmTableViewComponent } from './prm-table-view.component';

describe('PrmTableViewComponent', () => {
  let component: PrmTableViewComponent;
  let fixture: ComponentFixture<PrmTableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrmTableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrmTableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
