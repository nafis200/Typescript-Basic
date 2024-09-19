
class User{
    userName: string
    age: number 

    constructor(userName: string, age: number){
         this.userName = userName 
         this.age = age
    }

    display():void{
        console.log(`${this.userName}`)
    }
}



let user = new User("nafis",10)

user.userName = "nabil"

user.display()

