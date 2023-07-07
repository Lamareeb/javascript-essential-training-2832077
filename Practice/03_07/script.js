/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const house = {
    name: "laurasHouse",
    height: 20,
    width: 30,
    length: 25,
    acres: 1,
    priceInThousands: 20,
    test: "iamonlyatest",
  
    //nest an object
    features: {
      bedrooms: 2,
      kitchen: "yes",
      bathrooms: 2,
      fireplace: "yes",
      ac: "yes",
    },
    //nest another object
    utilities: {
      wellWater: "yes",
      septic: "yes",
      electricity: "yes",
    },
    forSale: true,
    toggleHouse: function(houseStatus) {
      this.forSale = houseStatus; //assign forSale status to houseStatus
    },
  };
  console.log("Name: ", house.name);
  
  console.log("$", house.priceInThousands, ",000");
  console.log("Bedrooms: ", house.features.bedrooms);
  console.log("Bathrooms: ", house.features.bathrooms);
  console.log("Acres: ", house.acres);
  
  console.log("Water: ", house.utilities.wellWater);
  console.log("Septic: ", house.utilities.septic);
  console.log("Electricity: ", house.utilities.electricity);
  
  console.log("houseforSale", house.forSale);