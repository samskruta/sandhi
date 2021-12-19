import rules from "./sandhi-rules";

const applySandhi = () => {
  const args = Array.from(arguments);
  let i =0;
  let output = args[0];
  console.log(args);
  while(i+1 < args.length ) {
    const firstWord = args[i];
    const lastWord = args[i+1];
    
    let last = firstWord.charAt(firstWord.length - 1);
    if(last === 'H') {
      last = firstWord.charAt(firstWord.length - 2) + 'H';
      output = output.substring(0, output.length - 2);
    } else {
      output = output.substring(0, output.length - 1);
    }
    const first = lastWord.charAt(0);
    const index = last+first;
    const combined = rules[index].combined;
    output = output + combined + lastWord.substring(1);
    i++;
  }
  return output;
};
  
export default applySandhi;
  