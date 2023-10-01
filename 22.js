var n1=document.getElementById("n1")
var n2=document.getElementById("n2")
var n3=document.getElementById("n3")
var n4=document.getElementById("n4")
var sum=document.getElementById("sum")
var com=document.getElementById("com")
var result=document.getElementById("result")
var start=document.getElementById("start")
var bal=document.getElementById("bal")
var x1=prompt("Enter Your Name")
var x2=prompt("Enter Your Amount")



function random(){
    var random=Math.floor(Math.random()*7)
    if(random==0){
        return 1
    }
    return random
}

function startgame(){
    var d1=random()
    var d2=random()
    var d3=random()
    var d4=random()
    var t=d1+d2
    var t1=d3+d4

    if (t>t1){
        result.innerHTML=`Congrats ${x1} you Won ${x2*2}`
        
    }
    else if (t==t1){
        result.innerHTML=`Tie as the score is Same`
    }
    else {
        result.innerHTML=`Sorry ${x1} you Lost ${x2}`
    }
    sum.innerHTML=` Your Score : ${t}`
    com.innerHTML=` Computer score : ${t1}`
    start.innerHTML=`Play Again`
    n1.innerHTML=(d1)
    n2.innerHTML=(d2)
    n3.innerHTML=(d3)
    n4.innerHTML=(d4)
    
}

function end(){
    sum.innerHTML=` You`
    com.innerHTML=` Computer`
   result.innerHTML=`Game Ended`
   n1.innerHTML=0
    n2.innerHTML=0
    n3.innerHTML=0
    n4.innerHTML=0

}