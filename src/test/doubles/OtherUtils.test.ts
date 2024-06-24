import { OtherStringUtils, calculatecomplexity, toUpperCaseWithCallBack } from '../../app/doubles/OtherUtils';


describe.skip('OtherUtils test suite', () => {

    describe.only('OtherStringUtils test with spies', ()=>{
        let sut: OtherStringUtils;

        beforeEach(()=>{
            sut = new OtherStringUtils();
        });

        it('Use a spy to track calls', () => {
            const toUpperCaseSpy = jest.spyOn(sut, 'toUpperCase');
            sut.toUpperCase('abc');

            expect(toUpperCaseSpy).toHaveBeenCalledWith('abc');
        });

        it('Use a spy to track calls to other module', () => {
            const consoleLogSpy = jest.spyOn(console, 'log');
            sut.logString('abc');

            expect(consoleLogSpy).toHaveBeenCalledWith('abc');
        });

        it('Use a spy to replace the implementation of a method', () => {
            jest.spyOn(sut, 'callExternalService').mockImplementation(() =>{
                console.log('calling mock implementation')
            });

            sut.callExternalService();

        });
    })

    describe('Tracking callbacks with Jest Mock', () => {
        const callBackMock = jest.fn();

        afterEach(()=>{
            jest.clearAllMocks();
        })

        it('toUpoperCase calls callback for invalid argument', () => {
            const actual = toUpperCaseWithCallBack('', callBackMock);
            expect(actual).toBeUndefined();
            expect(callBackMock).toHaveBeenCalledWith('Invalid Argument!');
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });

        it('toUpoperCase calls callback for valid argument', () => {
            const actual = toUpperCaseWithCallBack('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(callBackMock).toHaveBeenCalledWith('called function with abc');
            expect(callBackMock).toHaveBeenCalledTimes(1);
        });
    });

    describe('Tracking callbacks', () => {

        let cbArgs = [];
        let timesCalled = 0;

        function callBackMock(arg: string) {
            cbArgs.push(arg);
            timesCalled++;
        }

        afterEach(() => {
            cbArgs = [];
            timesCalled = 0;
        });

        it('toUpoperCase calls callback for invalid argument', () => {
            const actual = toUpperCaseWithCallBack('', callBackMock);
            expect(actual).toBeUndefined();
            expect(cbArgs).toContain('Invalid Argument!');
            expect(timesCalled).toBe(1);
        });

        it('toUpoperCase calls callback for valid argument', () => {
            const actual = toUpperCaseWithCallBack('abc', callBackMock);
            expect(actual).toBe('ABC');
            expect(cbArgs).toContain('called function with abc');
            expect(timesCalled).toBe(1);
        });
    });

    it('toUpoperCase calls callback for valid argument', () => {
        const actual = toUpperCaseWithCallBack('abc', () => { });
        expect(actual).toBe('ABC');
    });

    it('Calculates complexity', () => {
        const someInfo = {
            length: 5,
            extraInfo: {
                field1: 'someInfo',
                field2: 'someOtherInfo'
            }
        };

        const actual = calculatecomplexity(someInfo as any);

        expect(actual).toBe(10);
    });
});