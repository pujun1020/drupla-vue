<script setup lang="ts">
// api.ts
import axios from 'axios';
import { ref, reactive, onMounted, onUnmounted, computed } from "vue"
/**
 * 类型挑选，从一个类型中挑选出需要的类型
 * 自定义使用TS中的Pick
 * 需要用到泛型，并且需要用到keyof，in，extends
 */
type PjPick<T, K extends keyof T> = {
  [P in K]: T[P];
};
interface Todo {
  title: string
  description: string
  completed: boolean
}
type TodoPreview = PjPick<Todo, 'title' | 'completed'>
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}
/**
 * 类型只读，只读属性不能被修改
 * 自定义使用TS中的Readonly
 * 需要用到泛型，并且需要用到readonly,keyof, in
 */
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
interface Todo01 {
  title: string
  description: string
}

const todo01: MyReadonly<Todo01> = {
  title: "Hey",
  description: "foobar"
}

todo01.title = "Hello" // Error: cannot reassign a readonly property
todo01.description = "barFoo" // Error: cannot reassign a readonly property

/**
 * 
 */
// 实现 First<T> 泛型
type First<T extends any[]> = T extends [infer FirstElement, infer TowElement, ...any[]] ? [FirstElement, TowElement] : never;

// 定义两个数组类型
type arr1 = ['a', 'b', 'c'];
type arr2 = [3, 2, 1];

// 使用 First 泛型提取第一个元素的类型
type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3

// 测试
const value1: head1 = 'a'; // 正确
const value2: head2 = 3;   // 正确

// 下面的代码会引发类型错误
// const invalidValue1: head1 = 'b'; // 错误：'b' 不是 'a'
// const invalidValue2: head2 = 2;   // 错误：2 不是 3

/**
 * 实现 MyExclude<T, U> 泛型，用于从联合类型 T 中排除 U 类型中的成员。
 */
type MyExclude<T, U> = T extends U ? never : T;

// 测试用例
type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 预期结果是 'b' | 'c'
const result: Result = 'c'



/**
 * 实现 Length<T> 泛型，用于获取元组 T 的长度。
 */
type Length<T extends any[]> = T extends { length: infer L } ? L : never;

// 或者更直接地使用内置的元组属性：
type Length1<T extends any[]> = T['length'];

// 测试用例
type tesla = ['tesla', 'model 3', 'model X', 'model Y'];
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'];

type teslaLengthType = Length<tesla>;  // 应该是 4
type spaceXLength = Length1<spaceX>; // 应该是 5

const teslaModels: tesla = ['tesla', 'model 3', 'model X', 'model Y'];
const teslaLength: teslaLengthType = teslaModels.length;

/**
 * 实现 MyPromise<T> 泛型，用于模拟 Promise 的类型。
 * 
 * 注意：这个实现只是一个简单的示例，并不完全符合 Promise 的所有规范。
 */
type MyAwaited<T> = T extends Promise<infer U> ? MyAwaited<U> : T;
type GithubUserType = MyAwaited<FetchGithubUserResult>;
interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name?: string;
  company?: string;
  blog?: string;
  location?: string;
  email?: string;
  hireable?: boolean;
  bio?: string;
  twitter_username?: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}
type FetchGithubUserResult = Promise<GithubUser>;
const fetchGithubUser = (username: string): FetchGithubUserResult => {
  return axios.get<GithubUser>(`https://api.github.com/users/${username}`).then(response => response.data);
};

const username = ref('pujun1020');
const user = ref<Awaited<GithubUser> | null>(null);

const loadUser = async () => {
  try {
    const fetchedUser = await fetchGithubUser(username.value);
    user.value = fetchedUser;
  } catch (error) {
    console.error('Error fetching user:', error);
    user.value = null;
  }
};
onMounted(() => {
  loadUser()
})

/**
 * 三元运算符
 * @param C 条件
 * @param T 条件为真时返回的值
 * @param F 条件为假时返回的值
 * @returns
 * 根据条件C返回T或F
 */
type If<C extends boolean, T, F> = C extends true ? T : F;

interface BaseUser {
  id: number;
  name: string;
}

interface RegularUser extends BaseUser {
  isRegular: true;
}

interface AdminUser extends BaseUser {
  isAdmin: true;
  role: string;
}

type UserType<C extends boolean> = If<C, RegularUser, AdminUser>;

const regularUser: UserType<true> = {
  id: 1,
  name: 'John Doe',
  isRegular: true,
};

const adminUser: UserType<false> = {
  id: 2,
  name: 'Jane Smith',
  isAdmin: true,
  role: 'admin',
};
/**
 *数组合并
 * @param A 数组A
 * @param B 数组B
 * @returns
 * [...A, ...B]：使用扩展运算符将两个数组类型合并成一个新的数组类型。
 */
type Concat<A extends any[], B extends any[]> = [...A, ...B];

// 测试用例
type Result1 = Concat<[1], [2]>; // 预期结果是 [1, 2]
type Result2 = Concat<[1, 2, 3], [4, 5, 6]>; // 预期结果是 [1, 2, 3, 4, 5, 6]
type Result3 = Concat<[], [1, 2, 3]>; // 预期结果是 [1, 2, 3]
type Result4 = Concat<[1, 2, 3], []>; // 预期结果是 [1, 2, 3]
type Result5 = Concat<[1, 2], [3, 4, 5, 6]>; // 预期结果是 [1, 2, 3, 4, 5, 6]

/**
 * 类型参数：
T extends any[]：确保 T 是一个数组类型。
U：需要检查的元素类型。
递归类型：
T extends [infer First, ...infer Rest]：使用 infer 关键字从数组 T 中提取第一个元素 First 和剩余的元素 Rest。
First extends U：检查 First 是否等于 U。
Includes<Rest, U>：如果 First 不等于 U，则递归地检查剩余的元素 Rest。
false：如果数组为空（即没有更多元素可以检查），则返回 false。
 * @param T
 * @param U
 * @returns
 * true：如果数组 T 中包含元素 U，则返回 true。
 * false：如果数组 T 中不包含元素 U，则返回 false。
 */
type Includes<T extends any[], U> = T extends [infer First, ...infer Rest]
  ? First extends U
  ? true
  : Includes<Rest, U>
  : false;

// 测试用例
type isPillarMen1 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // 预期结果是 `false`
type isPillarMen2 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Kars'>; // 预期结果是 `true`
type isPillarMen3 = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Wamuu'>; // 预期结果是 `true`
type isPillarMen4 = Includes<[], 'Dio'>; // 预期结果是 `false`
type isPillarMen5 = Includes<[1, 2, 3, 4], 3>; // 预期结果是 `true`
type isPillarMen6 = Includes<[1, 2, 3, 4], 5>; // 预期结果是 `false`

/**
 * 类型参数：
T：原始类型，从中选择属性。
映射类型：
{ readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K]; }：这是一个映射类型，用于遍历 T 的所有属性，并根据属性类型决定是否递归处理。
readonly [K in keyof T]：遍历 T 的所有键，并将每个键标记为只读。
T[K] extends object ? DeepReadonly<T[K]> : T[K]：这是一个条件类型，用于检查属性 T[K] 是否是对象。
如果 T[K] 是对象，则递归调用 DeepReadonly<T[K]>，使其子对象也变成只读。
如果 T[K] 不是对象，则直接返回 T[K]，保持其类型不变。
 */
type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
type Person = {
  name: string;
  address: {
    street: string;
    city: string;
    zip: string;
  };
  age: number;
};

type DeepReadonlyPerson = DeepReadonly<Person>;

const person: DeepReadonlyPerson = {
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'Springfield',
    zip: '12345'
  },
  age: 30
};

// 下面的赋值应该报错
 person.name = 'Bob'; // Error: cannot reassign a readonly property
// person.address.street = '456 Elm St'; // Error: cannot reassign a readonly property
// person.age = 31; // Error: cannot reassign a readonly property

type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
 console.log("🚀 ~ cats.boris:", cats.boris)
 

</script>

<template>
  <div class="" style="margin-top: 120px;">
    <img style="width: 200px;" :src="user?.avatar_url" alt="Avatar" />99
    {{ user }}
  </div>
</template>

<style scoped></style>
