"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var UserId_1 = require("./UserId");
var UserName_1 = require("./UserName");
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
        return new this(new UserId_1.UserId(id), new UserName_1.UserName(userName), new UserName_1.UserName(userLastName));
    };
    User.prototype.toObject = function () {
        return {
            id: this.id.value,
            userName: this.id.value,
        };
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map