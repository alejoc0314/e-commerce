import { TestBed } from '@angular/core/testing';

import { CartServices } from './cart-items.service';

describe('CartItemsService', () => {
  let service: CartServices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartServices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
