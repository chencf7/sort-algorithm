// 选择一个增量序列，t1，t2，t3。。。增量序列一次减小，直至最后一个增量序列为1
// 按照增量序列的个数，依次进行排序
// 每一趟排序，根据对应的增量t，将待排序列分割成若干长度为m的子序列，分别对子序列进行直接插入排序
// 由于希尔排序的时间复杂度依赖于增量序列的函数。当n在某个特定的范围时，希尔的时间复杂度约为O(n^1.3)，最坏的情况下希尔排序的时间复杂度为O(n^2);
// 到目前为止，尚未得出一个最好的增量方法序列，希尔提出的方法是d[1]=n/2,d[t]=d[t-1]/2,其中，增量取整数。

// 希尔排序的时间性能优于直接插入排序的原因：
// ①当文件初态基本有序时直接插入排序所需的比较和移动次数均较少。
// ②当n值较小时，n和  的差别也较小，即直接插入排序的最好时间复杂度O(n)和最坏时间复杂度0(  )差别不大。
// ③在希尔排序开始时增量较大，分组较多，每组的记录数目少，故各组内直接插入较快，后来增量di逐渐缩小，分组数逐渐减少，而各组的记录数目逐渐增多，但由于已经按di-1作为距离排过序，使文件较接近于有序状态，所以新的一趟排序过程也较快。
// 因此，希尔排序在效率上较直接插入排序有较大的改进。

function sort(paramArr){
    console.log("hello shell sort.");
    if(paramArr instanceof Array){
        let length = paramArr.length;
        let gap = Math.floor(length/2);
        for(gap;gap>0;gap=Math.floor(gap/2)){
            for(let i=gap;i<length;i++){
                let j=0
                let tmp=paramArr[i];
                for(j=i-gap;j>=0&&paramArr[j]>tmp;j=j-gap){
                    paramArr[j+gap]=paramArr[j];
                }
                paramArr[j+gap]=tmp;
            }
        }
    }
}

module.exports={
    sort,
}