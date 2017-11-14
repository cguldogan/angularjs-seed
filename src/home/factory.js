'use strict';

function homeFactory(){

    var service = {
        foo:foo
    };

    function foo() {
        return 'foo';
    }

    return service;
}

module.exports = homeFactory;