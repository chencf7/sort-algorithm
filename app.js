var bubblesort = require('./app/bubblesort');
var selectionsort = require('./app/selectionsort');
var insertsort = require('./app/insertsort');
var shellsort = require('./app/shellsort');
var mergesort = require('./app/mergesort');
var quicksort = require('./app/quicksort');
var heapsort = require('./app/heapsort');
var countingsort = require('./app/countingsort');
var bucketsort = require('./app/bucketsort');

function main(){
    var arr=[3,44,38,15,36,26,27,2,38,4,19,72,50];

    // bubblesort.sort(arr);
    // console.log("bubble sort:");

    // selectionsort.sort(arr);
    // console.log("selection sort:");

    // insertsort.sort(arr);
    // console.log("insert sort:");

    // shellsort.sort(arr);
    // console.log("shell sort:");
    
    // quicksort.sort(arr);
    // console.log("quick sort:");

    // heapsort.sort(arr);
    // console.log("heap sort:");

    // countingsort.sort(arr);
    // console.log("counting sort:");

    bucketsort.sort(arr);
    console.log("bucket sort:");

    var outputStr="";
    for(let i=0;i<arr.length;i++){
        outputStr+=arr[i]+',';
    }
    console.log(outputStr.substring(0, outputStr.length-1));

    // let retArr = mergesort.sort(arr);
    // console.log("merge sort:");
    // var outputStr="";
    // for(let i=0;i<retArr.length;i++){
    //     outputStr+=retArr[i]+',';
    // }
    
    // console.log(outputStr.substring(0, outputStr.length-1));
}
main();