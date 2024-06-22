import { StringUtils, getStringInfo, toUpperCase } from '../app/Utils';

describe('Utils test suit', () => {

    describe('StringUtils tests', ()=>{
        const expected = 'ABC';
        let sut: StringUtils;

        beforeEach(()=>{
            sut = new StringUtils();
        });


        it('should return uppercase of valid string', ()=>{
            const actual = sut.toUpperCase('abc');
            
            expect(actual).toBe(expected);
        })

        it('should throw error on invalid argument - function', ()=>{
            function expectError(){
                const actual = sut.toUpperCase('');
            }

            expect(expectError).toThrow('Invalid argument!');
        })
        
        it('should throw error on invalid argument - arrow function', ()=>{
            expect(() => sut.toUpperCase('')).toThrow('Invalid argument!');
        })
        
        it('should throw error on invalid argument - try/catch block', (done)=>{
            try {
                sut.toUpperCase('');

                done('GetStringInfo should throw error on invalid argument!')
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                expect(error).toHaveProperty('message', 'Invalid argument!');
                done()
            }
        })
    })

    describe('toUpperCase examples', () => {

        it.each([
            { input: 'abc', expected: 'ABC' },
            { input: 'hello', expected: 'HELLO' },
            { input: 'My-string', expected: 'MY-STRING' },
        ])('$input should return $expected', ({ input, expected }) => {
            const actual = toUpperCase(input);
            
            expect(actual).toBe(expected);
        })

        it('should return uppercase of valid string', ()=>{
            const sut = toUpperCase;
            const expected = 'ABC';
            
            const actual = sut('abc');
            
            expect(actual).toBe(expected);
        })
    });

    describe('getStringInfo', () => {
        it('should return lowercase version of the string', () => {
            const actual = getStringInfo('My-string');
            expect(actual.lowerCase).toBe('my-string');
        });
    
        it('should return an empty object for extraInfo', () => {
            const actual = getStringInfo('My-string');
            expect(actual.extraInfo).toEqual({});
        });
    
        it('should return correct length of characters', () => {
            const actual = getStringInfo('My-string');
            expect(actual.characters.length).toBe(9);
        });
    
        it('should have characters array with correct length', () => {
            const actual = getStringInfo('My-string');
            expect(actual.characters).toHaveLength(9);
        });
    
        it('should return correct characters in the string', () => {
            const actual = getStringInfo('My-string');
            expect(actual.characters).toEqual(['M', 'y', '-', 's', 't', 'r', 'i', 'n', 'g']);
        });
    
        it('should contain specific character in characters array', () => {
            const actual = getStringInfo('My-string');
            expect(actual.characters).toContain<string>('M');
        });
    
        it('should have characters array containing specific characters', () => {
            const actual = getStringInfo('My-string');
            expect(actual.characters).toEqual(
                expect.arrayContaining(['r', 'i', 'n', 'M', 'y', '-', 'g'])
            );
        });
    
        it('extraInfo should not be undefined', () => {
            const actual = getStringInfo('My-string');
            expect(actual.extraInfo).not.toBe(undefined);
        });
    
        it('extraInfo should be defined', () => {
            const actual = getStringInfo('My-string');
            expect(actual.extraInfo).toBeDefined();
        });
    
        it('extraInfo should be truthy', () => {
            const actual = getStringInfo('My-string');
            expect(actual.extraInfo).toBeTruthy();
        });
    });



});