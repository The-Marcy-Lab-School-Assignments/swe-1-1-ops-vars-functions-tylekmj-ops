debugger

// Basic Variable & Expression Functions
const calculateArea = (width, height) => {
  // TODO: Calculate and return the area of a rectangle
  return width * height
};

const isEven = (number) => {
  // TODO: Return true if the number is even, false if odd
  return number % 2 == 0 ? true : false
};

const convertToFahrenheit = (celsius) => {
  // TODO: Convert celsius to fahrenheit using the formula: (celsius * 9/5) + 32
  return (celsius * 9/5) + 32
};

// String & Variable Functions
const createGreeting = (name) => {
  // TODO: Return a greeting string like "Hello, [name]!"
  return `Hello, ${name}`
};

const getInitials = (firstName, lastName) => {
  // TODO: Return initials by taking first letter of each name
  return `${firstName[0]}${lastName[0]}`
};

const formatPrice = (price) => {
  // TODO: Return price formatted as "$[price].00" (e.g., "$5.00")
  return `${price}.00`
};

// Function Logic Functions
const getLarger = (num1, num2) => {
  // TODO: Return the larger of the two numbers
  return num1 > num2 ? num1 : num2
};

const isValidAge = (age) => {
  // TODO: Return true if age is between 0 and 120, false otherwise
  return age >= 0 && age <= 120 ? true : false
};

module.exports = {
  calculateArea,
  isEven,
  convertToFahrenheit,
  createGreeting,
  getInitials,
  formatPrice,
  getLarger,
  isValidAge,
};
