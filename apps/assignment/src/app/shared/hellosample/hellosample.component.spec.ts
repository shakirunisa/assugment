import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HellosampleComponent } from './hellosample.component';

describe('HellosampleComponent', () => {
  let component: HellosampleComponent;
  let fixture: ComponentFixture<HellosampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HellosampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HellosampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
