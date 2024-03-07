class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  [Symbol.toPrimitive](hc) {
    if (hc === 'number') {
      return this._size;
    }
    if (hc === 'string') {
      return this._location;
    }
    return this;
  }
}

export default HolbertonClass;
