import { v4 } from 'uuid';

export type stringInfo = {
    lowerCase: string,
    upperCase: string,
    characters: string[],
    length: number,
    extraInfo: Object | undefined
  }

  type LoggerServiceCallBack = (arg: string) => void;

  export function toUpperCase(arg: string): string {
    return arg.toUpperCase();
  }

  export function toLowerCaseWithId(arg: string): string {
    return arg.toLowerCase() + v4();
  }

  export function calculatecomplexity(stringInfo: stringInfo): number {
    return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
  }

  export function toUpperCaseWithCallBack(arg: string, callback: LoggerServiceCallBack){
    if(!arg){
        callback('Invalid Argument!');
        return;
    }
    callback(`called function with ${arg}`)

    return arg.toUpperCase();
  }

  export class OtherStringUtils {

    public callExternalService(){
        console.log('Calling external service');
    }

    public toUpperCase(arg:string){
        return arg.toUpperCase();
    }

    public logString(arg: string){
        console.log(arg);
    }
  }