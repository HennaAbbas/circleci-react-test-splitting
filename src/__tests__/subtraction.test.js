import { subtract } from '../math';

describe('Subtraction testing', () => {
      test('4 - 1 = 3', () => {
        // expect(subtract(4, 1)).toBe(3);
        expect(subtract(4, 1)).toBe(8);            
      });

      test('6 - 1 = 5', () => {
        expect(subtract(6, 1)).toBe(5);
      });

      test('10 - 1 = 9', () => {
        expect(subtract(10, 1)).toBe(9);
      });
})
