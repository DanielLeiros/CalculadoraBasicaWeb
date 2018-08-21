function calcular(){
  var content = document.getElementById("operacaoI").value;
  var lastElement = content.length -1;
  var val1 = '';
  var val2='';
  var op=0;
  var rdy=0;

  for(var i = 0; i < content.length; i++){
    if(content[i] =='/' || content[i] =='-' || content[i] =='+' || content[i] =='*' || content[i] =='%' || content[i] =='^' && rdy ==0){
      op = content[i];
      rdy = 1;
    }else if(rdy == 1){
      val2+= content[i];

    }else{
      val1+=content[i];
    }
  }
  var x = +val1;
  var y = +val2;
  document.getElementById('out').style.display = "inline";
  if(op == "+"){
    document.getElementById("out").innerHTML = x+y;
  }else if(op == "-"){
    document.getElementById("out").innerHTML =x-y;
  }else if(op == '/'){
    document.getElementById("out").innerHTML =x/y;
  }else if(op=="*"){
    document.getElementById("out").innerHTML = x*y;
  }else if(op=="%"){
    document.getElementById("out").innerHTML = x%y;
  }else if(op=="^"){
    document.getElementById("out").innerHTML = x**y;
  }else{
    alert("Tente realizar corretamente a operação!")
  }
}

function zerar(){
  document.getElementById("operacaoI").value = "";
}
