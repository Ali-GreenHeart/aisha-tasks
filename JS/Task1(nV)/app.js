function IsPrime(n){
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i===0) return false;
    }
    return true;
}
console.log(IsPrime(2))
console.log(IsPrime(8))