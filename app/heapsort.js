// 堆排序 作为选择排序的改进版，堆排序可以把每一趟元素的比较结果保存下来，以便我们在选择最小/大元素时对已经比较过的元素做出相应的调整。
// 堆排序是一种树形选择排序，在排序过程中可以把元素看成是一颗完全二叉树，每个节点都大（小）于它的两个子节点，当每个节点都大于等于它的两个子节点时，就称为大顶堆，也叫堆有序； 当每个节点都小于等于它的两个子节点时，就称为小顶堆。
// 1，将数组元素依次构造成二叉树，0为根，1为左子节点，2为右子节点，3为1的左子节点，4为1的右子节点，5为2的左...
// 2，构造大顶锥，从最后一个叶子的父节点开始，依次循环遍历，构造大顶堆
// 3，交换堆顶与末尾元素，然后去除末尾元素，重新构建大顶堆
// 时间复杂度：其中构建初始堆经推导复杂度为O(n)，在交换并重建堆的过程中，需交换n-1次，而重建堆的过程中，根据完全二叉树的性质，[log2(n-1),log2(n-2)...1]逐步递减，近似为nlogn。所以堆排序时间复杂度一般认为就是O(nlogn)级。

function sort(paramArr){
    console.log("hello heap sort.")
    if(paramArr instanceof Array){
        var length = paramArr.length;
        for(var i=Math.floor(length/2-1);i>=0;i--){
            adjustHeap(paramArr, i, length);
        }
        //构建大顶堆成功,找到最大的值

        //交换堆顶与末尾元素，然后去除末尾元素，重新构建大顶堆
        for(var j=length;j>0;j--){
            var tmp = paramArr[0];
            paramArr[0] = paramArr[j-1];
            paramArr[j-1] = tmp;
            //原来的数组除了交换的根节点已经是大顶堆，需要重新调换后，在新的位置与其新的左右子节点判断调换顺序，构成新的大顶堆
            adjustHeap(paramArr, 0, j-1);
        }
    }
}

function adjustHeap(adjustArr, i, length){
    var tmp = adjustArr[i];
    // 从i结点的左子结点开始，也就是2i+1处开始，i为数组下标index
    // 这里循环遍历是因为当前节点与其左右子节点调换位置后，
    // 为保证调换后的子节点在与该子节点的左右子节点为大顶堆，因为须再次判断是否调换
    for(var k=i*2+1;k<length;k=k*2+1){  
        //依次判断i，与其左子节点2i+1，和2i+2三元素之间的最大值
        if(k+1<length && adjustArr[k+1]>adjustArr[k]){
            k++;    ////如果左子结点小于右子结点，k指向右子结点
        }
        if(adjustArr[k]>tmp){    //如果子节点中存在比根节点大的值，则将子节点较大的那个赋值给根节点
            adjustArr[i]=adjustArr[k];
            i=k;
        }else break;
    }
    adjustArr[i]=tmp;   //交换
}

module.exports={
    sort,
}