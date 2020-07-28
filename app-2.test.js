test('My array tester', () => {
    expect([15, 25, 30])
        .toHaveLength(3)
        .toEqual([15, 25, 30])
        .toStrictEqual([15, 25, 30])
        .not.toBe([15, 25, 30])
})

// with jest-extended
test('My second array tester', () => {
    expect([11, 42, 93])
        .toBeArray()
        .toBeArrayOfSize(3)
        .toEqual([11, 42, 93])
        .toIncludeAnyMembers([11, 42]);

    expect(100)
        .toBePositive()
        .toBeGreaterThan(99)
        .toBeLessThan(101)
        .toBeNumber()
        .not.toBeNaN()
        .toBe(100);

    expect('sam the programmer and software engineer')
        .toBeString()
        .toEqualCaseInsensitive('SAM THE PROGRAMMER AND SOFTWARE ENGINEER')
        .toStartWith('sam')
        .toEndWith('engineer')
        .not.toInclude('!')
        .toBe('sam the programmer and software engineer');
})