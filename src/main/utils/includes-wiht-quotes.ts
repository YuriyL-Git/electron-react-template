export function includesWithQuotes(text: string, textToCheck: string) {
  return text.includes(`"${textToCheck}"`) || text.includes(`'${textToCheck}'`);
}
