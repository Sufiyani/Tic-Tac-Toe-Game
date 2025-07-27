var box1=document.getElementById("1");
var box2=document.getElementById("2");
var box3=document.getElementById("3");
var box4=document.getElementById("4");
var box5=document.getElementById("5");
var box6=document.getElementById("6");
var box7=document.getElementById("7");
var box8=document.getElementById("8");
var box9=document.getElementById("9");

var count=1;

function text(){
    var CharacterO="O";
    var CharacterX="X";
    if(count%2===0){
        lastPlayer = "X"
        return CharacterX;
    }
    else{
      lastPlayer = "O"
        return CharacterO;
    }
}

function reset(){
    box1.innerHTML="";
    box2.innerHTML="";
    box3.innerHTML="";
    box4.innerHTML="";
    box5.innerHTML="";
    box6.innerHTML="";
    box7.innerHTML="";
    box8.innerHTML="";
    box9.innerHTML="";
    count=1;
}

function game(number){
    var textshow=text();
    if(number===1 && box1.innerHTML===""){
        box1.innerHTML=textshow;
        count++;
        win();
    }
    else if(number===2 && box2.innerHTML===""){
        box2.innerHTML=textshow;
        count++;
        win();
    }
    else if(number===3 && box3.innerHTML===""){
        box3.innerHTML=textshow;
        count++;
        win();
    }
    else if(number===4 && box4.innerHTML===""){
        box4.innerHTML=textshow;
        count++;
        win();
    }
    else if(number===5 && box5.innerHTML===""){
        box5.innerHTML=textshow;
        count++; 
        win();
    }
    else if(number===6 && box6.innerHTML===""){
        box6.innerHTML=textshow;
        count++;
        win();
    }
    else if(number===7 && box7.innerHTML===""){
        box7.innerHTML=textshow;
        count++;
        win();
    }
    else if(number===8 && box8.innerHTML===""){
        box8.innerHTML=textshow;
        count++;
        win();
    }
    else if(number===9 && box9.innerHTML===""){
        box9.innerHTML=textshow;
        count++;
        win();
    }

}

function messagePopUp(){
   alert(lastPlayer+" Win")
}


function win() {
    const container1 = box1.innerHTML;
    const container2 = box2.innerHTML;
    const container3 = box3.innerHTML;
    const container4 = box4.innerHTML;
    const container5 = box5.innerHTML;
    const container6 = box6.innerHTML;
    const container7 = box7.innerHTML;
    const container8 = box8.innerHTML;
    const container9 = box9.innerHTML;

    const winCombos = [
        [container1, container2, container3],
        [container4, container5, container6],
        [container7, container8, container9],
        [container1, container4, container7],
        [container2, container5, container8],
        [container3, container6, container9],
        [container1, container5, container9],
        [container3, container5, container7],
    ];

    for (let combo of winCombos) {
        if (combo[0] && combo[0] === combo[1] && combo[1] === combo[2]) {
            messagePopUp();
            return reset();
        }
    }

    if (
        container1 && container2 && container3 &&
        container4 && container5 && container6 &&
        container7 && container8 && container9
    ) {
        alert("It's a Draw!");
        reset();
    }
}
