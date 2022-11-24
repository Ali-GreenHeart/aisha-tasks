Object.prototype.objLength = function(){
    let length = 0
//     A: for-in de yeniden hasOwnProperty-ni yoxlamaga ehtiyac varmi?
    for(key in this)
    if(this.hasOwnProperty(key)) length++
    return length
}
let obj = {
    name: "a",
    age: 18
};
Object.prototype.firstProperty = function(){
    return Object.values(this)[0]
}
Object.prototype.lastProperty = function(){
//     A: ehsen oz yaratdigin property-i ile islemisen! 🍕 bu da hediyye ;)
    return Object.values(this)[this.objLength()-1]
}
console.log(obj.objLength())
console.log(obj.firstProperty())
console.log(obj.lastProperty())
