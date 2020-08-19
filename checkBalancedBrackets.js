// Q1. Check Balanced brackets

function checkBalanced(str) {
    console.time();
    const stack = [];
    for(let i=0; i<str.length; i++) {
        if(str[i]==='[' || str[i]==='{'  || str[i]=='(')  stack.push(str[i]);
        else if(str[i]===']' && stack.pop()!=='[') return i+1;
        else if(str[i]==='}' && stack.pop()!=='{') return i+1;
        else if(str[i]===')' && stack.pop()!=='(') return i+1;
    }
    if(stack.length!==0) return stack.length;

    console.timeEnd();
    return "Success";  
} 


// Test Case
// console.log(checkBalanced("[(foo;])"))