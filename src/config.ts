import { ConfigurationChangeEvent, workspace } from 'vscode';

export interface IConfig {
  activationLanguages: string[]
}

/**
 * 用户配置信息
 */
export class Config {

  public static Key = 'vscodeThemeCSSVariables';

  public static get get(): IConfig {
    return workspace.getConfiguration().get<IConfig>(
      Config.Key,
      {
        activationLanguages: []
      }
    );
  }

  public static watch(key: keyof IConfig, listener: (e: ConfigurationChangeEvent) => any) {
    return workspace.onDidChangeConfiguration((event) => {
      if (event.affectsConfiguration(`${Config.Key}.${key}`)) {
        listener(event);
      }
    });
  }
}