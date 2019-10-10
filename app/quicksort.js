// 通过一趟排序将待排记录分隔成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。
// 1.在待排序的元素任取一个元素作为基准(通常选第一个元素，但最的选择方法是从待排序元素中随机选取一个作为基准)，称为基准元素；
// 2.将待排序的元素进行分区，比基准元素大的元素放在它的右边，比其小的放在它的左边；
// 从右边扫描，找到第一个比基准元素小的，交换，更新right，然后从左边扫描，找到第一个比基准元素大的，交换，更新left，直至left=right
// 3.对左右两个分区重复以上步骤直到所有元素都是有序的。
// 不稳定排序，依据选取基准元素从而导致时间复杂度变化

function sort(paramArr, left, right){
    console.log("hello quick sort.")
    if(paramArr instanceof Array){
        var length = paramArr.length,
            left = typeof left=="number"?left:0,
            right = typeof right=="number"?right:length-1;
        quicksort(paramArr, left, right);
    }
}

function quicksort(paramArr, leftIndex, rightIndex){
    let left = leftIndex;
        right = rightIndex;
    let tmp = 0;
    if(left < right){
        tmp = paramArr[left];   //left作为基准元素
        while(left != right){
            while(right>left && paramArr[right]>=tmp){
                right--;    //从数组右边开始扫描，直至找到第一个比基准元素小的，即停止，交换
            }
            paramArr[left]=paramArr[right];
            while(left<right && paramArr[left]<=tmp){
                left++;     //从数组左边开始扫描，找到第一个比基准元素大的，即停止交换
            }
            paramArr[right]=paramArr[left];
        }
        paramArr[left] = tmp;   //此时left=right，至此一趟排序完成，index为left（right）左侧的元素都比基准元素小，右侧的都比基准元素大
        quicksort(paramArr, leftIndex, left-1);     //此时left=right
        quicksort(paramArr, left+1, rightIndex);    //此时right+1=left？？？
    }
}

module.exports = {
    sort,
}