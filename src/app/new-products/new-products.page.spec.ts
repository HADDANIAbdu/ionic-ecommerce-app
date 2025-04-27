import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsPage } from './new-products.page';

describe('NewProductsPage', () => {
  let component: NewProductsPage;
  let fixture: ComponentFixture<NewProductsPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(NewProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
