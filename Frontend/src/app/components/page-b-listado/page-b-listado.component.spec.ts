import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBListadoComponent } from './page-b-listado.component';

describe('PageBListadoComponent', () => {
  let component: PageBListadoComponent;
  let fixture: ComponentFixture<PageBListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageBListadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
