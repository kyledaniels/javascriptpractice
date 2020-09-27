const menu = {
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },

  get appetizers (){
    return this._courses.appetizers;
  },

  set appetizers(appetizerChoice){
    this._courses.appetizers=appetizerChoice;
  },

  get mains (){
    return this._courses.mains;
  },

  set mains(mainChoice){
    this._courses.mains=mainChoice;
  },

  get desserts (){
    return this._courses.desserts;
  },

  set desserts(dessertChoice){
    this._courses.desserts=dessertChoice
  },

  get courses (){
    return {appetizers:this.appetizers,
            mains:this.mains,
            desserts:this.desserts};
  },

  addDishToCourse (courseName,dishName,dishPrice) {
   const dish = {
     name:dishName,
     price:dishPrice,
   };
  return this._courses[courseName].push(dish);
  },

  getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
  const randomIndex =  Math.floor(Math.random() * dishes.length );
  return dishes[randomIndex];
  },

  generateRandomMeal(){
       const appetizer = this.getRandomDishFromCourse('appetizerChoice');
       const main = this.getRandomDishFromCourse('mainChoice');
       const dessert = this.getRandomDishFromCourse('dessertChoice');
       const totalPrice = appetizer.price + main.price + dessert.price;
       return `Your meal is ${appetizer.name},${main.name},${dessert.name}, and the total price is ${totalPrice}`;
  },
}

menu.addDishToCourse('appetizers','salad',4.00);
menu.addDishToCourse('appetizers','wings',5.00);
menu.addDishToCourse('appetizers','fries',4.50);

menu.addDishToCourse('mains','steak',14.00);
menu.addDishToCourse('mains','salmon',20.00);
menu.addDishToCourse('mains','chicken',10.00);

menu.addDishToCourse('deserts','coffee',4.00);
menu.addDishToCourse('deserts','ice cream',5.00);
menu.addDishToCourse('deserts','cake',6.00);

const meal = menu.generateRandomMeal()
console.log(meal);