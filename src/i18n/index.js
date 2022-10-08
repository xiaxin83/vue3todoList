import { createI18n, useI18n } from "vue-i18n";
import zh from "./zh";
import en from "./en";

const I18n = createI18n({
  // 默认语言
  locale: "en",

  legacy: false, // 想要同时能在setup语法糖、组合式API相关文件上使用，该项必须设置为 false。  固定false就行了，都vue3了，还想啥呢。。

  // 是否关闭控制台警告
  silentFallbackWarn: false,

  // 配置数字 格式； 用法： $n(1000, 'currency')
  numberFormats: {
    zh: {
      currency: {
        style: "currency",
        currency: "USD",
        notation: "standard",
      },
    },
    en: {
      currency: {
        style: "currency",
        currency: "JPY",
        useGrouping: true,
        currencyDisplay: "symbol",
      },
    },
  },

  // 设置语言环境
  messages: {
    zh: zh,
    en: en,
  },

  // 设置后备语言，当 locale 默认语言没数据时，从该数组内 按顺序从头到尾，在对应的 语言包 里找
  fallbackLocale: ["zh", "en"],
});
export default I18n;
