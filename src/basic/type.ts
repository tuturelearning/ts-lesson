type MyExclude<T, U> = T extends U ? never : T;

type Exclude4 = MyExclude<'nihao' | 'zaijian' | 'baibai', 'nihao' | 'baibai'>;

type a = Parameters<() => string>

type MyPickc<T, U> = U extends T ? U : never;

type b = MyPickc<'nihao' | 'zaijian' | 'baibai', 'nihao' | 'baibai'>;

interface Userss {
  id: number;
  name: string;
  address: string;
}

type c = MyExclude<keyof Userss, 'id'>;

type FunctionPropertyNames<T> = {
    [K in keyof T]: T[K] extends number ? K : never
}[keyof T]

type FunctionNonPropertyNames<T> = {
    [K in keyof T]: T[K] extends number ? never : K
}[keyof T]

type getFcuntionNames<T> = Pick<T, FunctionPropertyNames<T>>;

type d = FunctionPropertyNames<Userss>
type f = FunctionNonPropertyNames<Userss>
type g = getFcuntionNames<Userss>