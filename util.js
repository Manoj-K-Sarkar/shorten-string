exports.initAsciiArray = () => {
  const ASCII = [];
  for (let i = 97; i <= 122; i++) ASCII.push(String.fromCharCode(i));
  for (let i = 65; i <= 90; i++) ASCII.push(String.fromCharCode(i));
  for (let i = 48; i <= 57; i++) ASCII.push(String.fromCharCode(i));
  ASCII.push("|");
  ASCII.push("(");
  ASCII.push(")");
  return ASCII;
};
