// i18n/zh.js
export default {
  header: {
    chat: "聊天",
  },
  animations: {
    lily: "终将成为你",
    slot1: "{c} 蒜", // 命名插入值 写法
    hello: "{0} world {1}", // 数组写法
    repeat: "@:animations.lily <重复的", // 文本引用

    // Modifier 修饰符  > 还可自定义修饰符规则，此处不做介绍，需要用到再去看文档
    sample1: "liljiahui niu bi",
    test1: "@.upper:animations.sample1  全部 大写", // 全部 大写
    test2: "@.lower:animations.sample1  全部 小写", // 全部 小写
    test3: "@.capitalize:animations.sample1  首字母 大写", // 首字母 大写

    html1: "你好 <span>span标签</span> world", // html 结构

    // vue3 版的，不再需要使用 $tc()， 已经集成到 t() 和 $t()
    car: "一个小车 | 多个车车", // 只有2个时候， 不是单数1的，其他统统转译为复数 ！
    apple: "no apples | one apple | {count} apples", // 该声明方法 需保证声明顺序   无 | 单数 | 复数

    onlyZH: "默认语言有的，其他语言没有，则切换语言后，该内容不会变动",
    // onlyEN: '纯注释，写在这里方便当文档看'   //<> 当默认的zh 没有，则使用设置的 其他语言
  },
};
