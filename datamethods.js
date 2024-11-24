// var date=new Date()
// console.log(date);

// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getTime());


// console.log(date.setDate(16));
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());


apply 
let obj={
    id:256,
    name:"sumanth",
    work:"devloper"

}

let obj2=function(x,y){
    console.log(this.name +x+y);
    
}
obj2.apply(obj ,["sdfg","dghjhgf","ssssssfghjhgfd","gfdsa",5,6,])

blind

let obj={
    id:256,
    name:"sumanth",
    work:"devloper"

}

let obj2=function(x){
    console.log(this.name +x);
    
}
let c= obj2.bind(obj ,["kkkkdfg","dddddddddddghjhgf","ssssssfghjhgfd","gfdsa",5,6,])
c()











