

let user1: {username: string, userID?:number}[]

user1 = [{
    username:"nafis"
},
{
    userName:'nabil'
}
]

let user2: object[]

for(const key of user1){
     console.log(key)
}

for(let i = 0; i < user1.length; i++){
        console.log(user1[i])
}