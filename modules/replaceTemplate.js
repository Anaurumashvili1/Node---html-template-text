module.exports = (temp, obj) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, obj.productName);
  output = output.replace(/{%IMAGE%}/g, obj.image);
  output = output.replace(/{%QUANTITY%}/g, obj.quantity);
  output = output.replace(/{%ORIGIN%}/g, obj.from);
  output = output.replace(/{%PRICE%}/g, obj.price);

  output = output.replace(/{%NUTRIENTS%}/g, obj.nutrients);
  output = output.replace(/{%DESCRIPTION%}/g, obj.description);
  output = output.replace(/{%ID%}/g, obj.id);

  if (!obj.organic) output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");

  return output;
};
