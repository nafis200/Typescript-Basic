var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("".concat(this.userName));
    };
    return User;
}());
var user = new User("nafis", 10);
user.userName = "nabil";
user.display();
