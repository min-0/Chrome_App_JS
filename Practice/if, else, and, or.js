const age = prompt ("How old are you?"); //prompt창은 잘 쓰지 않아요

if(age >= 18 && age <= 21){
    console.log('you can drink but you should not')
}
else if(age > 21){
    console.log('go agead')
}
else{
    console.log('too young')
}