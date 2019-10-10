function sort(paramArr){
    console.log("hello insert sort.");
    if(paramArr instanceof Array){
        var length = paramArr.length;
        var currentValue;
        for(var i=1;i<length;i++){
            var j=0;
            currentValue = paramArr[i];
            for(j=i-1;j>=0&&paramArr[j]>currentValue;j--){
                paramArr[j+1]=paramArr[j];
            }
            // for(j=i-1;j>=0;j--){
            //     if(paramArr[j]>currentValue)
            //         paramArr[j+1]=paramArr[j];
            //     else break;
            // }
            paramArr[j+1]=currentValue;
        }
    }else{
        console.log("参数错误，请输入数组。");
    }
}

module.exports = {
    sort,
}