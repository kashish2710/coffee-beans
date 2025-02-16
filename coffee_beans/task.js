// let a=prompt("enter your name please");
// let x=document.getElementById("name");
// x.innerHTML=" " +a;

let a=document.getElementById("signin");
a.addEventListener('click',function(){
    window.open('signin.html','_blank');
});
let b=document.getElementById("offer");
b.addEventListener('click',function(){
window.open('offer.html','_blank');
});


function validateLogin() {
  
    let username=document.getElementById("name1").value;
    let mobile=document.getElementById("name2").value;

    if (username === "" || mobile=== "") {
        alert("Incomplete: Please fill in both fields.");
    } else {
        alert("Login Successful");
        window.open("offer.html",'_blank');
    }

}
let x=document.getElementById("coffee");
x.addEventListener('click',function(){
    window.open('coffee.html','_blank');
})

let y=document.getElementById("home");
y.addEventListener('click',function(){
    window.open('task.html','_blank');
})