addEventListener("keydown",function (event) {
    var inputs = document.getElementsByTagName("input");
	var voidCellId=foundVoidCell(), cell = inputs[voidCellId];
	if(event.keyCode==37){	// left
		if(voidCellId%4!=0){
			cell.value=inputs[voidCellId-1].value;
			cell.style="";
			inputs[voidCellId-1].value="";
			inputs[voidCellId-1].style="background-color:lightgreen;";
		}
	}else if(event.keyCode==38){	// up
		if(voidCellId>3){
			cell.value=inputs[voidCellId-4].value;
			cell.style="";
			
            inputs[voidCellId-4].value="";
			inputs[voidCellId-4].style="background-color:lightgreen;";
		}
	}else if(event.keyCode==39){	//right
		if((voidCellId+1)%4!=0){
			cell.value=inputs[voidCellId+1].value;
			cell.style="";
			
			inputs[voidCellId+1].value="";
			inputs[voidCellId+1].style="background-color:lightgreen;";
		}
	}else if(event.keyCode==40){	// down
		if(voidCellId<12){
			cell.value=inputs[voidCellId+4].value;	
			cell.style="";
			
			inputs[voidCellId+4].value="";
			inputs[voidCellId+4].style="background-color:lightgreen;";
		}
	}
    check();	
});

function generateGameField(){
	document.writeln("<table id='gameField'>");
	for(var i=0, f=1;i<4;i++){
		document.writeln("<tr id='gamecell'>");
		for(var j=0;j<4;j++, f++){
			document.writeln("<td><input type='button' name='"+i+"."+j+"' value=''></div></td>");
		}
		document.writeln("</tr>");
	}
    var inputs = document.getElementsByTagName("input");
    for (var k=1; k!=16;){
        var rand = parseInt(Math.random()*100%16); 
        if(inputs[rand].value==""){
            inputs[rand].value=k++;
        }
    }
	inputs[foundVoidCell()].style.backgroundColor="lightgreen";
}

function foundVoidCell(){
	var arr=document.getElementsByTagName("input");
	for(var i=0;i<arr.length;i++){
		if(arr[i].value==""){
			return i;
		}
	}
}

function check(){
	var inputs = document.getElementsByTagName("input");
    var flag=true;
    for(var i=0;i<inputs.length-1;i++){
        if(inputs[i].value != i+1)
            flag=false;
    }
    if(flag)
    		alert("Поздравляю, вы выиграли!");        
}

