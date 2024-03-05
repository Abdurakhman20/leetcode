export function isValid(s: string): boolean {
  let map = new Map([
      [")", "("],
      ["}", "{"],
      ["]", "["]
  ])
  const stack = [];
 
  for(let i = 0; i < s.length; i++) {
      if([...map.keys()].includes(s[i])) {
          const opening = stack.pop();
          if(map.get(s[i]) !== opening) return false;

      } else stack.push(s[i]);
  }
  return stack.length === 0;
};