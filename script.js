let output = document.getElementById('output');

function dispaly(num){
    output.value += num;
}

function cculate(){
    try{
        output.value = math.evaluate(output.value);
    }catch(err){
        output.value = "Error";
    }
}

function clr(){
    output.value = "";
}

function del(){
    output.value = output.value.slice(0, -1);
}