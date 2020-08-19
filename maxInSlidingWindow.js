// Q5. Max in Sliding Window

function maxInSlidingWindow(n, m, nums) {
    let max=Number.MIN_SAFE_INTEGER;
    let result=[];
    let start=1;
    let end=start+m-1;
    while(end<=n) {
        if(start==end) {
            result.push(max);
            max=0;
            end+=1;
            start=end-m+1;
        }
        if(nums[start-1]>max) {
            max=nums[start-1];
        }
        start+=1;
    }
    return result;
}

// Test Case
console.log(maxInSlidingWindow(8, 4, [2,7,3,1,5,2,6,2]));
