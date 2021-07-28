var CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const randomString = (len) => {
  const final = [];
  for (let i = 0; i < len; i++)
    final.push(CHARS.charAt(Math.floor(Math.random() * CHARS.length)));
  return final.join("");
};
