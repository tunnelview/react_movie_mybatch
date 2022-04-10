// Need to export inorder to be imported
export const randomChar = () => {
  const chars = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

  return chars.charAt(Math.floor(Math.random() * chars.length));
};
