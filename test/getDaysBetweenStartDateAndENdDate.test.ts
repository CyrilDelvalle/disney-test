import getDaysBetweenStartDateAndEndDate from "../utils/getDaysBetweenStartDateAndEndDate";

describe('getDaysBetweenStartDateAndEndDate', () => {
    test('result should be two if two days was selected', () => {
        const startDate = new Date(2022, 1, 1);
        const endDate = new Date(2022, 1, 3);
        const interval = getDaysBetweenStartDateAndEndDate(startDate, endDate); 
    
        expect(interval).toBe(2);
    });

    test('result should be five if five days was selected', () => {
        const startDate = new Date(2022, 1, 1);
        const endDate = new Date(2022, 1, 6);
        const interval = getDaysBetweenStartDateAndEndDate(startDate, endDate); 
    
        expect(interval).toBe(5);
    });
  });
