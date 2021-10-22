var Calculator = /** @class */ (function () {
    function Calculator() {
        var _this = this;
        this._currentExpr = "";
        var buttons = document.getElementsByClassName("button");
        for (var i = 0; i < buttons.length; ++i) {
            buttons[i].addEventListener("click", function (e) { return _this._onButtonClick(e); });
        }
        this._resultView = document.getElementsByClassName("result")[0];
        this._expressionView = document.getElementsByClassName("input")[0];
    }
    Calculator.prototype._onButtonClick = function (e) {
        if (!(e.currentTarget instanceof Element)) {
            return;
        }
        var p = e.currentTarget.querySelector("p");
        var symb = p === null || p === void 0 ? void 0 : p.innerText;
        if (symb) {
            this._handleSymbol(symb);
        }
    };
    Calculator.prototype._handleSymbol = function (s) {
        if (s == "C") {
            this._clear();
            return;
        }
        if (s == "=") {
            this._calculate();
            return;
        }
        this._currentExpr += s;
        this._resultView.innerText = this._currentExpr;
    };
    Calculator.prototype._calculate = function () {
        var value = "";
        try {
            value = eval(this._currentExpr);
        }
        catch (e) {
            this._resultView.innerText = "Invalid expression!";
            return;
        }
        if (value == "Infinity") {
            this._resultView.innerText = "Invalid expression!";
            return;
        }
        this._expressionView.innerText = this._currentExpr;
        this._resultView.innerText = value;
        this._currentExpr = value;
        return;
    };
    Calculator.prototype._clear = function () {
        this._expressionView.innerText = "";
        this._currentExpr = "";
        this._resultView.innerText = "";
    };
    return Calculator;
}());
var app = new Calculator();
