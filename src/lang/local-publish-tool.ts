import { Language } from '../core/enum';
import { LangConfig } from '../types';

export const localPublishTool: LangConfig = {
  'local-publish-tool.git-change-warn': {
    [Language.ZH_CN]: '当前本地有修改未提交，发布终止: ',
    [Language.EN_US]:
      'There are currently local modifications that have not been submitted, and publishing is terminated: ',
  },
  'local-publish-tool.clean-warn': {
    [Language.ZH_CN]: '正在清除当前分支改动',
    [Language.EN_US]: 'Clearing current branch changes',
  },
  'local-publish-tool.checkout': {
    [Language.ZH_CN]: '正在切换至最新 %s 分支',
    [Language.EN_US]: 'Switching to the latest %s branch',
  },
  'local-publish-tool.no-pkg-mgr': {
    [Language.ZH_CN]: '未检测到包管理器，跳过安装依赖',
    [Language.EN_US]: 'No package manager detected, skip installing dependencies',
  },
  'local-publish-tool.commit': {
    [Language.ZH_CN]: '提交',
    [Language.EN_US]: 'Commit',
  },
  'local-publish-tool.latest': {
    [Language.ZH_CN]: '已为最新',
    [Language.EN_US]: 'Already up to date',
  },
  'local-publish-tool.push': {
    [Language.ZH_CN]: '本地主干 %s 与远端有差异，开始推送代码...',
    [Language.EN_US]: 'Local trunk %s differs from remote, start pushing code...',
  },
  'local-publish-tool.push-tag': {
    [Language.ZH_CN]: '正在推送 tag v%s',
    [Language.EN_US]: 'Pushing tag v%s',
  },
  'local-publish-tool.new-version': {
    [Language.ZH_CN]: '已生成新版本号',
    [Language.EN_US]: 'New version number generated',
  },
  'local-publish-tool.config': {
    [Language.ZH_CN]: '配置',
    [Language.EN_US]: 'Config',
  },
  'local-publish-tool.desc': {
    [Language.ZH_CN]: '一个可以帮助本地发布 npm 包的工具',
    [Language.EN_US]: 'a tool which can help publish npm local',
  },
  'local-publish-tool.rule-input': {
    [Language.ZH_CN]: '请选择版本号变更规则',
    [Language.EN_US]: 'Please select the version number change rule',
  },
  'local-publish-tool.feature-input': {
    [Language.ZH_CN]: '请输入版本特性',
    [Language.EN_US]: 'Please enter version features',
  },
  'local-publish-tool.config-fail': {
    [Language.ZH_CN]: '配置文件解析失败，将使用默认配置',
    [Language.EN_US]: 'The configuration file parsing failed and the default configuration will be used',
  },
  'local-publish-tool.jest-fail': {
    [Language.ZH_CN]: '单测不通过，请检查单测结果',
    [Language.EN_US]: 'The test failed, please check the test results',
  },
};
