function fibonacci(n){
    if(n===1){
        return 1;
    }
    if(n===0){
        return 0;
    }
    if(n>10){
        throw new Error('n should <= 10')
    }
    if(n<0){
        throw new Error('n should >= 0')
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
exports.fibonacci = fibonacci