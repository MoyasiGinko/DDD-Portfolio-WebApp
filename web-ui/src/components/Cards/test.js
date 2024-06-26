let array = [
  { id: 1, name: "object1" },
  { id: 2, name: "object2" },
  { id: 3, name: "object3" },
];
let currentObject = null;

function next() {
  if (array.length > 0) {
    // Slice the first object from the array
    currentObject = array.shift();

    // Push the same object back into the array
    array.push(currentObject);

    // Log the current object and the modified array
    console.log("Current Object:", currentObject);
    console.log("Array:", array);
  } else {
    console.log("Array is empty");
  }
}

// Example usage:
next(); // Call the function to test it
