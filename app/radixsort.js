// 基数排序
// 按照低位先排序，然后收集；再按照高位排序，然后再收集；依次类推，直到最高位。
// 有时候有些属性是有优先级顺序的，先按低优先级排序，再按高优先级排序。最后的次序就是高优先级高的在前，高优先级相同的低优先级高的在前。
// 取得数组中的最大数，并取得位数；创建10个桶，分别为0-9，且每个桶的初始化为空数据
// arr为原始数组，以个位数分类，分别将个位数的值放置到对应index下的桶里面去，如76则放到index为6的桶里面去，如此完成桶
// 将上一步组成的桶还原成线性数组，然后按照10位数的值放置到对应index下的桶里面去，如76则放置到index为7的桶里面去
// 对百位进行上述操作...等等，最终输出即位结果


function sort(){
    
}