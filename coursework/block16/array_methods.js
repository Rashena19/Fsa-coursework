const items = [
    { id: 1, name: 'foo', price: 7 },
    { id: 2, name: 'bar', price: 6 },
    { id: 3, name: 'bazz', price: 9 },
    { id: 4, name: 'quq', price: 13 }
  ];

//   let name = prompt("Enter the item name.", "");

//   let found = items.find((item) => {return name === item.name;} )

//   if(found){
//     console.log("We found it! " + found.name)
//   }
//   else{
//     console.log("Nope")
//   }

  const name = prompt('enter a name of an item, we will try and find it', 'foo');
  const found = items.find(item => {return item.name.includes(search)})
