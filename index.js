function receivesAFunction (recieve) {
    recieve();
}


function returnsANamedFunction () {
    return receivesAFunction;
}

function returnsAnAnonymousFunction () {
    return function () { return `Hello`}
}