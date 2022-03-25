import React from 'react';
import { DateConverter } from '../features/DateConverter';

test("test", () => {
    const todaysDate = new Date("2022-03-16")
    const todaysDateString = DateConverter(todaysDate);
    const expectString = "ONSDAG, 16. MARS, 2022 KL 00:00";
    expect(todaysDateString).toBe(expectString);
});

test("test2", function () {
    expect(false).toBe(false);
});