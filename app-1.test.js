//Often in Jest when you are writing tests you may want to perform multiple assertions on the same variable. Currently to achieve this you have to write an individual expect for each assertion.
//As below ->
it('add 29 and 11', () => {
    const actual = 29 + 11;
    expect(actual).toBe(40);
    expect(actual).toBeGreaterThan(1);
    expect(actual).toBeLessThan(300);
});

//With jest-chain this can instead be written by chaining the matchers together
it('add 29 and 11', () => {
    expect(29 + 11)
        .toBe(40)
        .toBeGreaterThan(1)
        .toBeLessThan(300);
});