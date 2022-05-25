type getProperty<O extends object, K extends keyof O> = (obj: O, key: K) => O[K];

const User = {
    id: 666,
    name: 'nihao'
};

const getCustomProperty = <O extends object, K extends keyof O>(obj: O, key: K): O[K] => {
    return obj[key];
}

console.log(getCustomProperty(User, 'name'));

type anyKeys = keyof any; // string | number | symbol
type numberKeys = keyof number;

class Person {
    id: number = 6666;
    name: string = 'nihao';
}

type PersonKeys = keyof Person; // id | name

enum HttpMethod {
    Get,
    Post
};

type MethodEnum = typeof HttpMethod;  // {Get: 0, Post: 1}
const a: MethodEnum = {
  Get: HttpMethod.Get,
  Post: HttpMethod.Post,
};

type Method = keyof typeof HttpMethod; // 'Get' | 'Post'