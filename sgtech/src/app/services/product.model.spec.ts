import { Product } from '../services/product.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product()).toBeTruthy();
  });
});
