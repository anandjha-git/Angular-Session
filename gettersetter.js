class Rectangle {
    constructor() {
        this._length = 0;
        this._breath = 0;
    }
    get length() {
        return this._length;
    }
    get breath() {
        return this._breath;
    }
    set length(v) {
        this._length = v;
    }
    set breath(v) {
        this._breath = v;
    }
}
let rect = new Rectangle();
rect.length = 20;
console.log(rect.length);
