import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForEachComponent } from './for-each.component';

describe('ForEachComponent', () => {
  let component: ForEachComponent;
  let fixture: ComponentFixture<ForEachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForEachComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForEachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
