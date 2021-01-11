const menu = {
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
    }
};
menu._courses = {};
menu._courses.appetizers = [];
menu._courses.mains = [];
menu._courses.desserts = [];


menu.appetizers = "mini tacos";
console.log(menu);
console.log(menu.appetizers);
