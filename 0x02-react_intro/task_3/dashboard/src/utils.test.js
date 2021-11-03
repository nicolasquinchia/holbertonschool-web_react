import { getFullYear, getFooterCopy, getLatestNotification } from './utils.js'

test('Test GetFullYear Function', () => {
    const currYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currYear)
});

describe("Test getFooterCopy Function", () => {
    test('Case False', () => {
        expect(getFooterCopy(false)).toMatch('Holberton School main dashboard')
    });
    
    test('Case True', () => {
        expect(getFooterCopy(true)).toMatch('Holberton School')
    });
});

test('Test getLatestNotification Function', () => {
    expect(getLatestNotification()).toMatch('<strong>Urgent requirement</strong> - complete by EOD')
});
