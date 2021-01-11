const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  set appetizers(appetizerIn) {
    this._courses.appetizers.push(appetizerIn);
  },
  get mains() {
    return this._courses.mains;
  },
  set mains(mainIn) {
    this._courses.mains.push(mainIn);
  },
  get desserts() {
    return this._courses.desserts;
  },
  set desserts(dessertIn) {
    this._courses.desserts.push(dessertIn);
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    this[courseName] = { [dishName]: dishPrice };
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this[courseName];
    const randIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const price = Object.values(appetizer)[0] + 
        Object.values(main)[0] + 
        Object.values(dessert)[0];
    return `Welcome to the Steak-Out Steak-House. May I recommend you start off with ${Object.keys(appetizer)[0]} for $${Object.values(appetizer)[0]} followed by a hearty ${Object.keys(main)[0]} for $${Object.values(main)[0]} and for dessert may I suggest ${Object.keys(dessert)[0]} for $${Object.values(dessert)[0]}. The total of this meal will be $${price} plus tip of course.`;
  }
};

menu.addDishToCourse("appetizers", "mini tacos", 5.99);
menu.addDishToCourse("appetizers", "jalapeno poppers", 6.99);
menu.addDishToCourse("appetizers", "escargo", 9.99);
menu.addDishToCourse("appetizers", "chili fries with cheese", 7.99);
menu.addDishToCourse("appetizers", "stuffed potato skins", 8.99);
menu.addDishToCourse("appetizers", "poke bowl", 6.99);
menu.addDishToCourse("mains", "pork chops with brown gravy", 15.99);
menu.addDishToCourse("mains", "top sirloin steak grilled with mashed potatoes", 25.99);
menu.addDishToCourse("mains", "roasted lamb with mint jelly and fries", 23.99);
menu.addDishToCourse("mains", "fried fish of the day with holindaise and capers", 21.99);
menu.addDishToCourse("mains", "prime rib with au jus and baked potato", 39.99);
menu.addDishToCourse("desserts", "banana split with chocolate", 4.99);
menu.addDishToCourse("desserts", "ice cream cake", 5.99);
menu.addDishToCourse("desserts", "a slice of our famous pies", 5.99);
menu.addDishToCourse("desserts", "chocolate lava creme brule", 6.99);
menu.addDishToCourse("desserts", "gummy bears", 0.99);
menu.addDishToCourse("desserts", "m and m's", 0.99);

let meal = menu.generateRandomMeal();
console.log(meal);
