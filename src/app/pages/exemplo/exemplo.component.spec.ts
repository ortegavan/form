import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploComponent } from './exemplo.component';

describe('ExemploComponent', () => {
  let component: ExemploComponent;
  let fixture: ComponentFixture<ExemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
