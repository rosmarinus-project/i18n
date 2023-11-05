import { osLocaleSync } from 'os-locale';
import { Language } from './enum';

export function getSystemLocale() {
  const res = osLocaleSync();

  if (res === 'zh-CN') {
    return Language.ZH_CN;
  }

  return Language.EN_US;
}

export const getSystemLocaleCache = (() => {
  let cache: Language | undefined = undefined;

  return () => {
    if (!cache) {
      cache = getSystemLocale();
    }

    return cache;
  };
})();
