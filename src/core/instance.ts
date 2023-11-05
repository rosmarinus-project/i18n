import type { LangConfig } from '../types';
import type { Language } from './enum';

export function getInstance(configList: LangConfig[], lang: Language) {
  const langConfig: LangConfig = configList.reduce((prev, curr) => {
    return Object.assign(prev, curr);
  });

  return {
    t(key: string, ...args: string[]): string {
      const res = langConfig[key][lang];

      if (args.length) {
        const split = langConfig[key].placeholder || '%s';
        const resArr = res.split(split);

        return resArr.reduce((prev, curr, index) => {
          return prev + (args[index - 1] || '') + curr;
        });
      }

      return res;
    },
  };
}
