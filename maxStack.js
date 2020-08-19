// Q4. Extending stack interface to include max() push() and pop() in O(1) time

class Stack  {
    constructor() {
        this.data=[];
        this.top=-1;
        this.maxStack=[];
        this.maxIndex=-1;
        this.max=Number.MIN_SAFE_INTEGER;
    }

    push(x) {
        if(x===this.max) this.maxStack[this.maxIndex].count+=1;
        if(x>this.max) {
            this.maxIndex+=1;
            this.maxStack[this.maxIndex]={value:x, count:1};
            this.max=x;
        }
        this.top+=1;
        this.data[this.top]=x;
    }

    pop() {
        if(this._isEmpty()) {
            console.log('Stack empty');
            return;
        }
        if(this.data[this.top]===this.max) {
            if(this.maxStack[this.maxIndex].count==1) {
                delete this.maxStack[this.maxIndex];
                if(this.maxStack.length<=0) {
                    this.maxStack.length-=1;
                    this.maxIndex-=1;
                    this.max=this.maxStack[this.maxIndex].value;
                }
                else this.max=Number.MIN_SAFE_INTEGER;
            }
            else {
                this.maxStack[this.maxIndex].count-=1;
            }
        }
        const poppedElt = this.data[this.top];
        delete this.data[this.top];
        this.data.length-=1;
        this.top-=1;
        return poppedElt;
    }
    
    _isEmpty() {
        if(this.top===-1) return true;
        return false;
    }

    getMax() {
        return this.max;
    }
    
    print() {
        console.log(this.data);
    }
}


function performOps(n, cmds) {
    const stack = new Stack();
    for(let i=0; i<n; i++) {
        if(cmds[i].includes("push")) {
            const [cmd, val] = cmds[i].split(" ");
            stack.push(val);
        }
        else if(cmds[i]==="pop") stack.pop();
        else if(cmds[i]==="max") console.log(stack.getMax());
    }
}

// Test Case
performOps(5, ["push 2", "push 1", "max", "pop", "max"]);





