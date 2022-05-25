type Position = 
    | 'left' 
    | 'right'
    | 'top' 
    | 'bottom';

type CssPadding = `padding-${Position}`;
type CssMargin = `margin-${Position}`;
type createPstyle<T extends string, P extends string> = `${T}-${P}`;
type CssPadding2 = createPstyle<'padding', Position>;

// what is infer? why generic need use extends

// infer 可以实现类型推断
// 2. extends 确保输入的是string 类型收缩

type getTType<T> = T extends `${infer R}${Uppercase<Position>}` ? R 
    : T extends `${infer R}${Capitalize<Position>}` ? `${R}-Capi` : T;

type cssPaddingUpper = getTType<'marginLEFT'>; // margin
type cssPaddingCap = getTType<'marginLeft'>; // margin