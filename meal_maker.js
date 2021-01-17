/*******************************Begin menu object************************************ */
const menu = {

  // defined _courses object with three keys; appetizers, mains, and desserts and all their values are set to empty arrays.
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  // getter method that returns the value in this._courses.appetizers which should be an array
  get appetizers() {
    return this._courses.appetizers;
  },

  // getter method that returns the value in this._courses.mains which should be an array
  get mains() {
    return this._courses.mains;
  },

  // getter method that returns the value in this._courses.desserts which should be an array
  get desserts() {
    return this._courses.desserts;
  },

   // getter method that returns the value in this._courses which should be an object that returns an object with three _courses keys; appetizers, mains, and desserts.
   get courses() {
    return this._courses;
  },

  // setter method that takes an object as parameter and pushes it into this._courses.appetizers array
  set appetizers(appetizerIn) {
    this._courses.appetizers.push(appetizerIn);
  },

  // setter method that takes an object as parameter and pushes it into this._courses.mains array
  set mains(mainIn) {
    this._courses.mains.push(mainIn);
  },

  // setter method that takes an object as parameter and pushes it into this._courses.desserts array
  set desserts(dessertIn) {
    this._courses.desserts.push(dessertIn);
  },

  // This uses the setter methods to add a dish with a price to the appropriate course item
  addDishToCourse(courseName, dishName, dishPrice) {
    this[courseName] = {[dishName]: dishPrice};
  },

  // This method is supposed to find the price of the dish object
  findPriceOfDish(dish) {
    const dishPrice = Object.values(dish);
    return Number(dishPrice);
  },

  // This generates a random index number between 0 and the length of the dishes array rounded down so -1. Returns the dishes array element at the random index.
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randIndex];
  },

  // This method generates a random 3 course meal with the prices. Returns an interpolated string.
  generateRandomMeal() {

    // Saved each random course to its appropriate variable
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");

    // Used Obeject.keys() at index [0] for each varaiable above and saved it to 3 variables which should be the name of the dish.
    const appetizerName = Object.keys(appetizer)[0];
    const mainName = Object.keys(main)[0];
    const dessertName = Object.keys(dessert)[0];
    
    // Used the findPriceOfDish method for each course and saved it appropriate variables which should be the price of the dish
    const appetizerPrice = this.findPriceOfDish(appetizer);
    const mainPrice = this.findPriceOfDish(main);
    const dessertPrice = this.findPriceOfDish(dessert);

    // total is all the course prices added together
    const total = appetizerPrice + mainPrice + dessertPrice;

    // This is the crown jewel: a formatted string that lists out the random courses with prices and total.
    return `Welcome to the Steak-Out Steak-House. May I recommend you start off with ${appetizerName} for $${appetizerPrice} followed by hearty ${mainName} for $${mainPrice} and for dessert may I suggest ${dessertName} for $${dessertPrice}. The total of this meal will be $${total} plus tip of course.`;
  }
};
/**************************************end menu object******************************************** */


/*****************************this section is populating the menu********************************** */
menu.addDishToCourse("appetizers", "mini tacos", 5.99);
menu.addDishToCourse("appetizers", "jalapeno poppers", 6.99);
menu.addDishToCourse("appetizers", "escargo", 9.99);
menu.addDishToCourse("appetizers", "chili fries with cheese", 7.99);
menu.addDishToCourse("appetizers", "stuffed potato skins", 8.99);
menu.addDishToCourse("appetizers", "poke bowl", 6.99);
menu.addDishToCourse("appetizers", "onion rings", 3.99);
menu.addDishToCourse("mains", "pork chops with brown gravy", 15.99);
menu.addDishToCourse("mains", "top sirloin steak grilled with mashed potatoes", 25.99);
menu.addDishToCourse("mains", "roasted lamb with mint jelly and fries", 23.99);
menu.addDishToCourse("mains", "fried fish of the day with holindaise and capers", 21.99);
menu.addDishToCourse("mains", "prime rib with au jus and baked potato", 39.99);
menu.addDishToCourse("mains", "Chalupas", 12.99);
menu.addDishToCourse("desserts", "banana split with chocolate", 4.99);
menu.addDishToCourse("desserts", "ice cream cake", 5.99);
menu.addDishToCourse("desserts", "a slice of our famous pies", 5.99);
menu.addDishToCourse("desserts", "chocolate lava creme brule", 6.99);
menu.addDishToCourse("desserts", "gummy bears", 0.99);
menu.addDishToCourse("desserts", "m and m's", 0.99);
menu.addDishToCourse("desserts", "slurpee", 1.99);

// This section generates a random meal and logs it to the console.
let meal = menu.generateRandomMeal();
console.log(meal);

/************************************end*************************************** */