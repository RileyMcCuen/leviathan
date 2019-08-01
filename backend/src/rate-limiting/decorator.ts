import { RLCat } from './../logging/config';
// tslint:disable: ban-types
export class Tick {

    static inst = new Tick();

    static token(increment: number) {
        return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
            const originalMethod = descriptor.value;
            descriptor.value = function(...args: any[]) {
                RLCat.info(() => `${Tick.inst.tokens}`);
                Tick.inst.Tokens += increment;
                const result = originalMethod.apply(this, args);
                return result;
            };
            return descriptor;
        };
    }

    private Tokens: number;

    constructor() {
        if (Tick.inst !== undefined) {
            throw new Error('This is a singleton.');
        }
        this.Tokens = 0;
    }

    get tokens(): number {
        return this.Tokens;
    }
}
