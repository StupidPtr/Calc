class Calculator {

    private _currentExpr: string;
    private _resultView: HTMLElement;
    private _expressionView: HTMLElement;

    constructor(){
        this._currentExpr = "";
        let buttons: HTMLCollectionOf<Element> = document.getElementsByClassName("btn-container__btn");
        for(let i = 0; i < buttons.length; ++i){
            buttons[i].addEventListener("click", (e) => this._onButtonClick(e));
        }

        this._resultView = document.getElementsByClassName("calc__result")[0] as HTMLElement;
        this._expressionView = document.getElementsByClassName("calc__input")[0] as HTMLElement;
    }

    private _onButtonClick(e: Event){
        if(!(e.currentTarget instanceof Element)){
            return;
        }
        
        let p = e.currentTarget.querySelector("p");
        let symb = p?.innerText;
    
        if(symb){
            this._handleSymbol(symb);
        }
    }

    private _handleSymbol(s: string){
        if(s == "C"){
            this._clear()
            return;
        }
    
        if(s == "="){
            this._calculate();
            return;
        }
    
        this._currentExpr  += s;
        this._resultView.innerText = this._currentExpr;
    }

    private _calculate(){
        let value = "";
        try {
            value = eval(this._currentExpr) as string;
        } catch(e: any) {
            this._resultView.innerText = "Invalid expression!";
            return;
        }

        if(value == "Infinity"){
            this._resultView.innerText = "Invalid expression!";
            return;
        }

        this._expressionView.innerText = this._currentExpr;
        this._resultView.innerText = value;
        this._currentExpr = value
        return;
    }

    private _clear(){
        this._expressionView.innerText = "";
        this._currentExpr  = "";
        this._resultView.innerText = "";
    }
}


let app: Calculator = new Calculator();