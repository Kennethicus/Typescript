function getFirstELement<T>(array: T[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNum = getFirstELement<number>(numbers);

const strings = ["232", "1212"];
const firstString = getFirstELement(strings);

const map = new Map<string, number>();
map.set("sss", 4);

const map2 = new Map<string, number>([["sss", 34]]);
map2.set("sss", 4);

const map3 = new Map<string, Map<string, number>>();

//?

type ApiResponse<Data> = {
  data: Data;
  isError: boolean;
};

type UserResponse = ApiResponse<{ name: string; age: number }>;

type BlogResponse = ApiResponse<{ title: string }>;

const response: UserResponse = {
  data: {
    name: "Kyle",
    age: 23,
  },
  isError: false,
};

const responseBlog: BlogResponse = {
  data: {
    title: "Hello",
  },
  isError: false,
};

//? Status

type StatusResponse = ApiResponse<{ title: string }>;

type Book<T, U> = {
  id: T;
  title: U;
  totalPages?: T;
};

const science: Book<string, number> = {
  id: "1",
  title: 1,
};
