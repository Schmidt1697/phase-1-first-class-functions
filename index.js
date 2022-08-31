const callBackFunction = () => console.log('hello');

const receivesAFunction = function(callBackFunction){
    callBackFunction();

}

const returnsANamedFunction = function(){
    return function namedFunction(){};
};

const returnsAnAnonymousFunction = function() {
    return ()=> (console.log('hi'))
}