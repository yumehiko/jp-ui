import { loadDefaultJapaneseParser } from 'budoux';

const parser = loadDefaultJapaneseParser();
const separator = '\u200b';

export function budoux(text: string) {
  if (!text) {
    return '';
  }

  return parser.parse(text).join(separator);
}
