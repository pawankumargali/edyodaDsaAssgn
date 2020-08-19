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


// Test Case
// const stack = new Stack();
// stack.push(1);
// stack.push(3);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(4);
// stack.push(5);
// stack.print();
// console.log(stack.getMax());
// stack.pop();
// stack.pop();
// stack.pop();
// stack.print();
// console.log(stack.getMax());
// stack.pop();
// stack.pop();
// stack.print();
// console.log(stack.getMax());
// stack.pop();
// stack.print();
// stack.pop();
// console.log(stack.getMax());
// stack.print();



