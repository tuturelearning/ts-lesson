type User1 = {
    [K: number]: string;
}

const user1: User1 = {
    1: 'zaijian'
}

type User2 = Record<'id', string>;

const user2: User2 = {
    'id': 'zaijian'
};

const user3: Record<string, string> = {
    1: 'zaijian',
    'zaijian': 'nihao'
};

const user4: {
    [K: `get${string}`]: string;
} = {
    getPrice: 'zaijian'
};

type myRecord<K extends keyof any, T> = {
    [P in K]: T;
};

const user6: myRecord<'id', string> = {
    id: 'nihao'
};

type Vec1 = {x: number};
type Vec2 = {x: number, y: number};
type SubType<T, U> = T extends U ? true : false;
type isSub = SubType<Vec2, Vec1>;