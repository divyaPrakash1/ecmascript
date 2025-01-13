import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsArrayComponent } from './is-array.component';

describe('IsArrayComponent', () => {
  let component: IsArrayComponent;
  let fixture: ComponentFixture<IsArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IsArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
