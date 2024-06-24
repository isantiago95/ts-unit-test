import { PasswordChecker, PasswordErrors } from '../../app/pass_checker/PasswordChecker';

describe('PasswordChecker test suite', () => {

    let sut: PasswordChecker;

    beforeEach(() => {
        sut = new PasswordChecker();
    })

    it('password with less than 8 chars is invalid', ()=>{
        const actual = sut.checkPassword('1234567');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.TOO_SHORT);
    })
    
    it('password with more than 8 chars is valid', ()=>{
        const actual = sut.checkPassword('12345Abc');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toEqual([]);
    })
    
    it('password with no uppercase is invalid', ()=>{
        const actual = sut.checkPassword('12345abc');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_UPPERCASE);
    })
    
    it('password with uppercase is valid', ()=>{
        const actual = sut.checkPassword('12345Abc');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toEqual([]);
    })
    
    it('password with no lowercase is invalid', ()=>{
        const actual = sut.checkPassword('12345ABC');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_LOWERCASE);
    })
    
    it('password with lowercase is valid', ()=>{
        const actual = sut.checkPassword('12345Abc');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toEqual([]);
    })
    
    it('complex password is ok', ()=>{
        const actual = sut.checkPassword('12345Abc');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toEqual([]);
    })
    
    it('admin password with no number is invalid', ()=>{
        const actual = sut.checkAdminPassword('Abcdefgh');
        expect(actual.valid).toBe(false);
        expect(actual.reasons).toContain(PasswordErrors.NO_NUMBER);
    })
    
    it('admin password with number is valid', ()=>{
        const actual = sut.checkAdminPassword('Abcdefgh1');
        expect(actual.valid).toBe(true);
        expect(actual.reasons).toHaveLength(0);
    })
})