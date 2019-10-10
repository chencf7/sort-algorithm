// 桶排序是计数排序的升级版
// 创建指定size的桶,初始化指定size的桶的每一项为空数组
// 将需要排序的数组按照指定的size分割，插入到指定size的桶的对应的空数组里面去
// 依次将指定size的桶里面的数组以插入排序
// 排序完成后输出
// 最好情况下使用线性时间O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，因为其它部分的时间复杂度都为O(n)。很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。但相应的空间消耗就会增大。

function sort(paramArr, bucketSize){
    console.log("hello bucket sort.")
    if(paramArr instanceof Array && paramArr.length>1){
        var length = paramArr.length,
            sortIndex = 0;
        var maxValue = paramArr[0],
            minValue = paramArr[0];
        for(var i=1;i<length;i++){
            if(paramArr[i]>maxValue) maxValue=paramArr[i];
            if(paramArr[i]<minValue) minValue=paramArr[i];
        }

        // var maxValue=Math.max.apply(null, paramArr);
        // var minValue=Math.min.apply(null, paramArr);
        console.log("max:"+maxValue+",min:"+minValue);
        
        var DEFAULT_BUCKET_SIZE=5;
        bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
        var bucketCount = Math.floor((maxValue-minValue)/bucketSize)+1;
        var bucketArr = new Array(bucketCount);
        for(var j=0;j<bucketCount;j++) bucketArr[j]=[];

        for(var j=0;j<length;j++){
            var index = Math.floor((paramArr[j]-minValue)/bucketSize);
            bucketArr[index].push(paramArr[j]);
        }
        for(var j=0;j<bucketCount;j++){
            insertsort(bucketArr[j]);
            if(bucketArr[j] instanceof Array && bucketArr[j].length>0){
                for(var k=0;k<bucketArr[j].length;k++){
                    paramArr[sortIndex++] = bucketArr[j][k];
                }
            }
        }
    }
}

function insertsort(paramArr){
    if(paramArr instanceof Array){
        var length=paramArr.length,
            tmp=0;
        for(var i=1;i<length;i++){
            var j=0;
            tmp=paramArr[i];
            for(j=i-1;j>=0&&paramArr[j]>tmp;j--){
                paramArr[j+1]=paramArr[j]
            }
            paramArr[j+1]=tmp;
        }
        return paramArr;
    }
    return null;
}

module.exports={
    sort,
}