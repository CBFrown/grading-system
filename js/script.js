function gradingSysTem(){
    var i = document.getElementById('num').value;
    var l = document.getElementById('num2').value;
    var u = document.getElementById('num3').value;
    var r = document.getElementById('num4').value;

    var add = parseFloat(i)+parseFloat(l)+parseFloat(u)+parseFloat(r);
    var avg = add/4;
    document.getElementById('show_grade').innerHTML = "Did not meet expectations: Average: "+avg;

    if(avg <= 74){
        document.getElementById('show_grade').innerHTML = "Did not meet expectations: Average: "+avg;
    }else if(avg <= 79){
        document.getElementById('show_grade').innerHTML = "Fairly Satisfactory: Average: "+avg;
    }else if(avg <= 84){
        document.getElementById('show_grade').innerHTML = "Satisfactory: Average: "+avg;
    }else if(avg <= 89){
        document.getElementById('show_grade').innerHTML = "Very Satisfactory: Average: "+avg;
    }else if(avg <= 100){
        document.getElementById('show_grade').innerHTML = "Outstanding: Average: "+avg;
    }else {
        document.getElementById('show_grade').innerHTML = "Grade does not exist: Average: "+avg;
    }
    
}