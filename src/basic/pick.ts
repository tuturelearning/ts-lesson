interface User {
    id: number;
    name: string;
    address: string;
}

type MyPick<T extends object, U extends keyof T> = {
    [K in U]: T[K];
}

type MyPickIdName = MyPick<User, 'id' | 'name'>;
type PickIdName = Pick<User, 'id' | 'name'>;
