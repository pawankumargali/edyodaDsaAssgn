// Q2. Compute Tree Height

function getTreeHeight(n, parents) {
    let maxHt=1;
    let ht=1;
    for(let i=0; i< parents.length; i++) {
        if(parents[i]!==-1) {
            let j=i;
            while(parents[j]!==-1) {
                ht+=1;
                j=parents[j];   
            }    
        }
        if(ht>maxHt) 
            maxHt = ht;
        ht=1;
    }
    return maxHt;
}


// Test Case
// console.log(getTreeHeight(5, [4, -1, 4, 1, 1] ));
// console.log(getTreeHeight(5, [-1, 0, 4, 0, 3]));