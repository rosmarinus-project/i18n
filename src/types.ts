import { Language } from './core/enum';

export interface LangItem {
  [Language.EN_US]: string;
  [Language.ZH_CN]: string;
  placeholder?: string;
}

export type LangConfig<K extends string | number = string> = Record<K, LangItem>;
