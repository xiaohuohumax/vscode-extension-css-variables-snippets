import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

/**
 * 递归匹配文件
 * @param folder 文件夹
 * @param exts 后缀名
 * @param context 匹配内容
 * @returns 
 */
function loopMatchFilesByExts(folder: string, exts: string[], context: string): string[] {
  const res: string[] = []

  for (const dirent of fs.readdirSync(folder, { withFileTypes: true })) {
    const file = path.join(dirent.path, dirent.name)

    if (dirent.isDirectory()) {
      res.push(...loopMatchFilesByExts(file, exts, context))
      continue
    }

    if (!exts.includes(path.extname(dirent.name))) {
      continue
    }

    const fileData = fs.readFileSync(file, 'utf-8');

    if (!fileData.includes(context)) {
      continue
    }

    res.push(file)
    console.log(chalk.green('match:'), chalk.gray(path.relative(process.cwd(), file)));
  }
  return res;
}

/**
 * 休眠函数
 * @param ms 毫秒
 * @returns 
 */
async function sleep(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

/**
 * 重试函数
 * @param fn 函数
 * @param times 重试次数
 * @param interval 间隔 ms
 * @param catchCallback 错误回调 
 * @returns 
 */
async function retry<T>(fn: () => T, times: number, interval: number,
  catchCallback: (count: number, error: Error) => any): Promise<T> {
  let count = 0;
  while (count < times) {
    try {
      return await fn();
    } catch (e) {
      catchCallback(++count, e as Error);
      await sleep(interval);
    }
  }
  return await fn();
}

export default {
  retry,
  loopMatchFilesByExts
}