export function groupAnagrams(strs: string[]): string[][] {
  let temp = new Map<string, string[]>();

  for(let str of strs) {
      let strKey = str.split("").sort().join("");
      
      if(!temp.has(strKey)) temp.set(strKey, []);

      temp.get(strKey)?.push(str);
  }
  return Array.from(temp.values());
};