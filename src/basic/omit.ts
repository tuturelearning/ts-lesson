interface UserOmit {
  name: string;
  account: string;
  password: string;
  createDate: Date;
  updateDate: Date;
}

type UserInfo = Omit<User, 'createDate' | 'updateDate'>

interface UserNewDateString
  extends Omit<UserOmit, 'createDate' | 'updateDate'> {
  createDate: string;
  updateDate: string;
}

const user: UserNewDateString = {
  name: 'name',
  account: 'account',
  password: 'passowrd',
  createDate: 'createDate',
  updateDate: 'updateDate',
};

type MyOmit<O, K extends keyof O> = Pick<O, Exclude<keyof O, K>>;

type UserInfo2 = MyOmit<UserOmit, 'createDate' | 'updateDate'>;

type MyOmit3<O, K extends keyof O> = Pick<O, Exclude<keyof O, K>>;