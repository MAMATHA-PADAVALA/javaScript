
var arr=[-1,2,-3,4,-5];

function forEach(arr,method){

        document.write("<br><br>");
        for(var i=0;i<arr.length;i++){
            method(arr[i]);
        }

}


function Positive(element){

    
    if(element>0)
        document.write("true<br>");
    else
        document.write("false<br>");
}

function Negative(element){
    
    if(element<0)
        document.write(true+"<br>");
    else
        document.write(false+"<br>");
}



forEach(arr,Positive);
forEach(arr,Negative);
