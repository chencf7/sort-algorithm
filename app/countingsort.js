// 计数排序
// 其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
// 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

// 找出待排序的数组中最大和最小的元素；
// 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
// 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
// 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
// 时间复杂度是O(n+k)，空间复杂度也是O(n+k)，其排序速度快于任何比较排序算法。当k不是很大并且序列比较集中时，计数排序是一个很有效的排序算法。

function sort(paramArr){
    console.log("hello counting sort.")
    if(paramArr instanceof Array){
        var max = Math.max.apply(null, paramArr);
        var min = Math.min.apply(null, paramArr);
        console.log("max:" + max + ",min:" + min);
        countingsort(paramArr, min, max);
    }
}

function countingsort(paramArr, min, max){
    var bucket = new Array(max+1),
        sortIndex = 0;

    for(var i=0;i<paramArr.length;i++){
        if(typeof bucket[paramArr[i]] == "undefined")
            bucket[paramArr[i]]=0;
        bucket[paramArr[i]]++;
    }

    for(var j=0; j<max+1;j++){
        if(typeof bucket[j] != "undefined"){
            while(bucket[j]>0){
                paramArr[sortIndex++] = j;
                bucket[j]--;
            }
        }
    }
    return paramArr;
}

module.exports={
    sort,
}