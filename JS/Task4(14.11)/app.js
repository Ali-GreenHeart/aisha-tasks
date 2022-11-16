function Messenger() {
    let arr= []
    this.send = (muellif, mesaj)=>{
    let time = new Date()
    let text = `${time.getHours()}:${time.getMinutes()} ${muellif} ${mesaj}`
    arr.push(text)
    console.log(text)
    }
    this.showHistory = ()=>{
        arr.forEach((elem, a)=>{
            console.log(`${a+1}. ${elem}`)
        })
    }
}
const messenger = new Messenger();
messenger.send('A','salam')
messenger.send('B','salam')
messenger.showHistory()