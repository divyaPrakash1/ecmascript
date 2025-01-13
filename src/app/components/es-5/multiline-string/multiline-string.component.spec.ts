import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultilineStringComponent } from './multiline-string.component';

describe('MultilineStringComponent', () => {
  let component: MultilineStringComponent;
  let fixture: ComponentFixture<MultilineStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultilineStringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultilineStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
