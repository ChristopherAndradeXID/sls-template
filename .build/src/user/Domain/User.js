"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var UserId_1 = require("./ValueObject/UserId");
var UserName_1 = require("./ValueObject/UserName");
var UserLastname_1 = require("./ValueObject/UserLastname");
var User = /** @class */ (function () {
    function User(id, userName, userLastName) {
        this.id = id;
        this.userName = userName;
        this.userLastName = userLastName;
    }
    User.create = function (id, userName, userLastName) {
        return new this(id, userName, userLastName);
    };
    User.fromPrimitives = function (id, userName, userLastName) {
        return new this(new UserId_1.UserId(id), new UserName_1.UserName(userName), new UserLastname_1.UserLastname(userLastName));
    };
    User.prototype.toPrimitives = function () {
        return {
            id: this.id.value,
            userName: this.userName.value,
            lastname: this.userLastName.value
        };
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map