
jest.mock('../../app/doubles/OtherUtils', () =>({
    ...jest.requireActual('../../app/doubles/OtherUtils'),
    calculatecomplexity: ()=>{return 10}
}))

jest.mock('uuid', ()=>({
    v4: ()=> '123'
}))

import * as OtherUtils from '../../app/doubles/OtherUtils'

describe('module tests', ()=>{
    it('should calculate complecity', ()=>{
        const result = OtherUtils.calculatecomplexity({} as any)
        console.log(result)
    })

    it('keep other functions', ()=>{
        const result = OtherUtils.toUpperCase('abc')
        expect(result).toBe('ABC')
    })
    
    it('string with uuid', ()=>{
        const result = OtherUtils.toLowerCaseWithId('HUGIN')
        expect(result).toBe('hugin123')
    })
})