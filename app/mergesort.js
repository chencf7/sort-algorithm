// 把长度为n的输入序列分成两个长度为n/2的子序列；
// 对这两个子序列分别采用归并排序；
// 将两个排序好的子序列合并成一个最终的排序序列。
// 又名2-路归并

function sort(paramArr){
    console.log("hello merge sort.")
    return mergesort(paramArr);
}

function mergesort(paramArr){
    if(paramArr instanceof Array){
        let length = paramArr.length;
        if(length<2) return paramArr;
        let middle = Math.floor(length/2),
            leftArr = paramArr.slice(0, middle),
            rightArr = paramArr.slice(middle);

        return merge(mergesort(leftArr), mergesort(rightArr));
    }
}

function merge(left, right){
    let result = new Array();
    while(left.length>0&&right.length>0){
        if(left[0]<right[0]){
            result.push(left.shift());
        }else{
            result.push(right.shift())
        }
    }
    while(left.length) result.push(left.shift());
    while(right.length) result.push(right.shift());
    return result;
}

module.exports={
    sort,
}