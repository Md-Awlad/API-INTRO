//API = application programming interface
//js object notation
//JSON=javascript object notation
const user = {id:11, name:'awlad', job:'actor'};
const stringified = JSON.stringify(user);
// console.log(stringified);
// console.log(user);


const shop ={
    name:'Alia store',
    address:'ranbir road',
    profit:15000,
    products:['laptop','mobile','pepsi'],
    owner:{
        name: 'Alia bhatt',
        profession:'actor',
    },
    isExpensive:false
};
const shopStringified = JSON.stringify(shop);
// console.log(shop);
// console.log(shopStringified);
const converted = JSON.parse(shopStringified);
console.log(converted.products);