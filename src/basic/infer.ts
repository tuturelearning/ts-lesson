type getInferType<T> = 
    T extends (infer R)[] ? R
    : T extends Promise<infer R> ? R
    : T extends () => infer R ? R
    : T extends (...arg: infer U) => infer R ? [U, R]
    : T;

type getArrayType = getInferType<string[]>;
type getArrayType2 = getInferType<number[]>;
type getPromiseType = getInferType<Promise<string>>;
type getPromiseType2 = getInferType<Promise<string[]>>;
type getPromiseType3 = getInferType<Promise<number>>;
type getFnType = getInferType<(x: number) => string>;
type getFnType2 = getInferType<() => number>;
type getType = getInferType<string>

// FirstIsString
type FirstIsString<T> = T extends [infer S extends string, ...unknown[]] ? S : never;;