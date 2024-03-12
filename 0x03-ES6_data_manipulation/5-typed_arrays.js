export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const myView = new DataView(buffer, 0);
  if (position > length - 1) {
    throw Error('Position outside range');
  }

  myView.setInt8(position, value);

  return myView;
}
