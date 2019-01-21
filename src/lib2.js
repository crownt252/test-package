import * as d3 from 'd3';

const Lib2 = function () {
    const Lib2 = function() {
        this._data = {};
        console.log('Lib2 inited');
    };

    Lib2.prototype.log = function() {
        console.log('data = ', this._data);
    };

    return Lib2;
};

export default Lib2();
