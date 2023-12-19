function filter(arr,method)
{
    document.write("<br><br>");
    arr.forEach(element => {
        method(element);
    });

}


function findNegative(element){
    if(element<0)
    document.write(element+"\n");
}


function findTwoDigit(element){
    if(element>9)
    document.write(element+"\n");
}

const arr=[-1,12,-3,14,5];
filter(arr,findNegative);
filter(arr,findTwoDigit);