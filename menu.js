const menu = {
    _courses:{
       appetizers:[],
       mains:[],
       desserts:[]
    },
    get appetizers(){
        return this._courses.appetizers;
    },
    
    get mains(){
         return this._courses.mains;
    },
  
    get desserts(){
         return this._courses.desserts;
    },

    set appetizers(appetizers){
        this._courses.appetizers= appetizers;
    },

    set mains(mains){
        this._courses.mains= mains;
    },

    set desserts(desserts){
        this._coursers.desserts= desserts;
    },

get courses(){
  return {
    appetizers:this.appetizers,
    mains:this.mains,
    desserts:this.desserts
  }
},

addDishToCourse(courseName,dishName,dishPrice){
   const dish ={
     name:dishName,
     price:dishPrice,
   }
    return this._courses[courseName].push(dish);
},

getRandomDishFromCourse(courseName){
    const dishes = this.courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex]

  },
  generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourses('mains');
      const dessert = this.getRandomDishFromCourses('desserts');
      const totalPrice= appetizer.price - main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name},
      and the total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers','salad',4.00);
menu.addDishToCourse('appetizers','wings',5.00);
menu.addDishToCourse('appetizers','fries',4.50);

menu.addDishToCourse('mains','steak',14.00);
menu.addDishToCourse('mains','salmon',20.00);
menu.addDishToCourse('mains','chicken',10.00);

menu.addDishToCourse('deserts','coffee',4.00);
menu.addDishToCourse('deserts','ice cream',5.00);
menu.addDishToCourse('deserts','cake',6.00);