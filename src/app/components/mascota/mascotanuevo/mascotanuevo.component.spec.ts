import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotanuevoComponent } from './mascotanuevo.component';

describe('MascotanuevoComponent', () => {
  let component: MascotanuevoComponent;
  let fixture: ComponentFixture<MascotanuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotanuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotanuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
