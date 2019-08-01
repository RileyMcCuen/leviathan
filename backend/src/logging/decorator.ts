import { DefaultCat } from './../logging/config';
// tslint:disable-next-line: ban-types
export function log(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    const originalMethod = descriptor.value; // save a reference to the original method

    // NOTE: Do not use arrow syntax here. Use a function expression in
    // order to use the correct value of `this` in this method (see notes below)
    descriptor.value = function(...args: any[]) {
        // pre
        DefaultCat.info(() => `The method args are: ${JSON.stringify(args)}`);
        // run and store result
        const result = originalMethod.apply(this, args);
        // post
        DefaultCat.info(() => `The return value is::  + ${result}`);
        // return the result of the original method (or modify it before returning)
        return result;
    };
    return descriptor;
}
