export const toUpperCaseFirst = ([ firstLetter, ...restOfWord ]) => firstLetter.toUpperCase() + restOfWord.join('');
export const toUpperCaseFirstRGX = (string) => string.replace(/\b[a-zA-Z]/g, (match) => match.toUpperCase());

export const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
