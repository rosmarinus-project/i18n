import { getInstance } from '../src/core/instance';
import { localPublishTool } from '../src/lang/local-publish-tool';
import { Language } from '../src/core/enum';

describe('replace', () => {
  beforeEach(() => {});

  afterEach(() => {});

  test('placeholder', () => {
    const res = getInstance([localPublishTool], Language.EN_US).t('local-publish-tool.checkout', 'main');

    expect(res).toBe('Switching to the latest main branch');
  });
});
