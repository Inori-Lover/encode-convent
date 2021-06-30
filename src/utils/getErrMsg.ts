export const DEFAULT_ERR_MSG = "网络错误";

/**
 * 获取错误信息
 *
 * @param {unknown} err 错误/响应
 * @param {string} [defaultMsg] 可选，提取到的错误信息为空时fallback的信息
 */
export function getErrMsg(err: unknown, defaultMsg = DEFAULT_ERR_MSG): string {
  if (err !== 0 && !err) {
    return defaultMsg;
  }

  if (typeof err === "string" || typeof err === "number") {
    return `${err}`;
  }

  // @ts-ignore
  return `${err.msg || err.message || defaultMsg}`;
}
