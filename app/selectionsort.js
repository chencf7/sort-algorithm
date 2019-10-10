function sort(paramArr){
    console.log("hello selection sort.")
    if(typeof paramArr!=undefined && paramArr instanceof Array){
        let length = paramArr.length;
        let minIndex = 0;
        for(let i=0;i<length;i++){
            minIndex=i;
            for(let j=i+1;j<length;j++){
                if(paramArr[j]<paramArr[minIndex])
                    minIndex=j;
            }
            let tmp = paramArr[i];
            paramArr[i] = paramArr[minIndex];
            paramArr[minIndex] = tmp;
        }
    }else{
        console.log("参数错误，请传入数组。")
    }
}

module.exports={
    sort,
}