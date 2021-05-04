let shortText = /[^\n]{2,}/;
let number = /^[0-9]{1,}$/;

const patterns = {
  fullName: /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/,
  email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:]|])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:)+)\])/,
  password: /[^\n]{8,}/,
  cpassword: /[^\n]{8,}/,
  phoneNumber: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/,
  profilePic: /^/,
  location: /^/,
  title: shortText,
  name: shortText,
  option: shortText,
  description: shortText,
  category: shortText,
  subCategory: shortText,
  type: shortText,
  review: shortText,
  quantity: number,
  cost: number,
  discount: number,
  rating: /(\d+(?:\.\d+)?)/,
  featured: shortText,
  search: shortText,
};

export const validate = (field, Regex) => {
  if (patterns[Regex].test(field)) return true;
  return false;
};

export const validateInput = (event) =>
  validate(event.target.value, event.target.attributes.name.value);
