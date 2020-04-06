// You're going shopping, and you need a shopping list.
// 1. Update your groceryList with the items you need: Potatoes, Orange Juice and Rice.
// 2. Loop through the groceryList object to gather the item properties into the groceriesToBuy array.
// 3. Then use console.log() to print out the list. It should print ['Potatoes', 'Orange Juice', 'Rice']

let groceriesToBuy = [];

let groceryList = {
  item1: "cheese",
  item2: "bread",
  item3: "tomatoes"
};
Object.values(groceryList).forEach( e => {
  return groceriesToBuy.push(e);
});
 
console.log(groceriesToBuy);
