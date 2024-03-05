export function isPalindrome(s: string): boolean {
  let newStr = "";
  
  for(let i = 0; i < s.length; i++) {
      if(s[i].match(/[a-zA-Z0-9]/)) {
          newStr += s[i].toLowerCase();
      }
  }

  return newStr === newStr.split("").reverse().join("");
};
