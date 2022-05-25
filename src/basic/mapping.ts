interface User {
    name: string;
    account: string;
    password: string;
}

type createReadonlyPartialObj<O> = {
    readonly [K in keyof O]?: O[K]
}

type UserReadOnlyPartial = {
    readonly [K in keyof User]?: User[K]
};

type UserReadOnlyPartial2 = Readonly<Partial<User>>

type UserReadOnlyPartial3 = createReadonlyPartialObj<User>

type createTp<O> = {
    readonly [K in keyof O]?: O[K]
}

type aa = createTp<User>