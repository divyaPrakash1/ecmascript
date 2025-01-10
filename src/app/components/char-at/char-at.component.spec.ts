import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharAtComponent } from './char-at.component';

describe('CharAtComponent', () => {
  let component: CharAtComponent;
  let fixture: ComponentFixture<CharAtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharAtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharAtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
