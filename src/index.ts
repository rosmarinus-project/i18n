import { getSystemLocaleCache } from './core/system';
import { localPublishTool } from './lang/local-publish-tool';
import { getInstance } from './core/instance';

export * from './lang/local-publish-tool';

export * from './core/system';

export * from './core/instance';

export default function defaultInstance(lang = getSystemLocaleCache()) {
  return getInstance([localPublishTool], lang);
}
