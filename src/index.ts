/**
 * Sanitize a string by removing HTML tags, special characters, and trimming.
 */
export function sanitize(input: string): string {
    return input
      .replace(/<[^>]*>/g, '')       // HTMLタグ除去
      .replace(/[^\w\s]/gi, '')      // 特殊文字除去
      .replace(/\s+/g, ' ')          // 余分な空白削除
      .trim();                       // 前後の空白除去
  }