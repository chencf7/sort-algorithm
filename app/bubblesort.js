function sort(paramArr){
    console.log("hello bubble sort.")
    if(paramArr instanceof Array){
        var length = paramArr.length;
        for(let i=0;i<length;i++){
            for(let j=0;j<length-i;j++){
                if(paramArr[j]>paramArr[j+1]){
                    let tmp = paramArr[j+1];
                    paramArr[j+1] = paramArr[j];
                    paramArr[j]= tmp;
                }
            }
        }
    }else{
        console.log("参数错误，请传入数组。")
    }
}

module.exports = {
    sort,
}