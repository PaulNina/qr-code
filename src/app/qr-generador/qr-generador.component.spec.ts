import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrGeneradorComponent } from './qr-generador.component';

describe('QrGeneradorComponent', () => {
  let component: QrGeneradorComponent;
  let fixture: ComponentFixture<QrGeneradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrGeneradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QrGeneradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
