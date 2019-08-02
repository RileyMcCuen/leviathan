import bcrypt from 'bcrypt';

// tslint:disable: ban-types
export function Hash(index: number) {
    // tslint:disable-next-line: only-arrow-functions
    return function(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        const originalMethod = descriptor.value;
        descriptor.value = function(...args: any[]) {
            return bcrypt.hash(args[index], 5).then((hash: string) => {
                args[index] = hash;
                return originalMethod.apply(this, args);
            });
        };
        return descriptor;
    };
}
