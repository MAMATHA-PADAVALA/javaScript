function reduce(arr,method)
{
    document.write("<br><br>");
    method(arr);
};




function findSum(arr){

    document.write("Sum Of elements<br>");
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    document.write(sum+"\n");
}


function countNegative(arr){
    document.write("Count Of Negative<br>");
    var count=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]<0)
            count++;
    }
    document.write(count);
}

const arr=[-1,12,-3,14,5];
reduce(arr,findSum);
reduce(arr,countNegative);