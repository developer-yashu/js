let arr=[];

document.getElementById("mybutton").addEventListener("click",function(){
    let inputelement = document.getElementById("myInput");
    let inputvalue = inputelement.value;


    if(inputvalue.trin()!==""){
        arr.push(inputvalue);
        console.log("arr:",arr);
        inputelement.value = "";
    }
    else{
        alert("Please enter some text!");
    }
})