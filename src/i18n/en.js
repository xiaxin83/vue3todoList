// i18n/en.js
export default {
  header: {
    chat: "chat",
  },
  animations: {
    lily: "Will eventually become you",
    slot1: "{c} recoil", // 命名插入值 写法
    hello: "{1} world {0}", // 数组写法
    repeat: "@:animations.lily", // 文本引用

    // Modifier 修饰符
    sample1: "lil JIA hui niu bi",
    test1: "@.upper:animations.sample1  ceshi",
    test2: "@.lower:animations.sample1  ceshi",
    test3: "@.capitalize:animations.sample1  ceshi",

    html1: "hello <span>span标签</span> world", // html 结构

    car: "car | cars",
    apple: "no apples | one apple | {count} apples",

    // onlyZH: '单纯的注释，无意义，不用管',
    onlyEN: "en - 中文没有，英文有的，设置后备语言功能", // 当默认的zh 没有，则使用设置的 其他语言
  },
};
