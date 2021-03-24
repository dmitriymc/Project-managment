"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var Button_1 = require("../../Ui/Button");
var createUser_1 = require("./components/createUser");
var usersCreators = require("../../Actions/usersAction");
var Preloader_1 = require("../../Ui/Preloader");
var rolesList_1 = require("../../constants/rolesList");
require("./style.scss");
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            createUserForm: false
        };
        _this.createUserForm = function () { return _this.setState({ createUserForm: !_this.state.createUserForm }); };
        _this.createUser = function (user) {
            _this.props.newUser(user);
            _this.setState({ createUserForm: false });
        };
        return _this;
    }
    Users.prototype.render = function () {
        var _this = this;
        return (react_1["default"].createElement("div", { className: "page" },
            react_1["default"].createElement("div", { className: "page-header" },
                react_1["default"].createElement(Button_1.Button, { className: 'page-header__button--left', align: "left", title: "TO PROJECTS", type: "large", img: '<i class="fas fa-chevron-left"></i>', onClick: this.props.history.goBack }),
                react_1["default"].createElement("div", { className: "page-header__title" },
                    react_1["default"].createElement("h2", null, "Users")),
                react_1["default"].createElement(Button_1.Button, { className: "page-header__button--right", title: "CREATE NEW USER", align: "right", titleActive: "CLOSE NEW USER", type: "large", onClick: this.createUserForm, active: this.state.createUserForm })),
            react_1["default"].createElement("div", { className: "page-content" }, this.props.loading ? react_1["default"].createElement(Preloader_1.Preloader, null) : react_1["default"].createElement("div", { className: "users" }, this.state.createUserForm ? react_1["default"].createElement(createUser_1.CreateUser, { createUser: this.createUser }) :
                rolesList_1.rolesList.map(function (role) {
                    return react_1["default"].createElement("div", { className: "users-department", key: role.id },
                        react_1["default"].createElement("div", { className: "users-department__title" }, role.name),
                        react_1["default"].createElement("div", { className: "users-department__container" }, _this.props.users.map(function (user, index) {
                            return user.role == role.id && react_1["default"].createElement("div", { className: "user", key: index },
                                react_1["default"].createElement("div", { className: "user__avatar" }, user.avatar && react_1["default"].createElement("img", { className: "user__img", src: user.avatar })),
                                react_1["default"].createElement("div", { className: "user__info" },
                                    react_1["default"].createElement("div", { className: "user__name" }, user.name),
                                    react_1["default"].createElement("div", { className: "user__position" }, rolesList_1.rolesList[user.role].name)));
                        })));
                })))));
    };
    return Users;
}(react_1["default"].Component));
var mapStateToProps = function (state) {
    return {
        users: state.users.users,
        loading: state.users.loading
    };
};
var mapDispatchToProps = function (dispatch) {
    return redux_1.bindActionCreators(usersCreators, dispatch);
};
exports["default"] = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Users);
