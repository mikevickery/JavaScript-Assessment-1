// JavaScript-Assessment-1 ... objects.js

// 1. Using dot and bracket notation modify the existing object values 
// to replace the information with your own

var me = {
    'name': 'Jake Overall',
    'age': 29,
    'hair color': 'brown'
};
console.log(me);
me["name"] = 'Mike Vickery';
me["age"] = 59;
me["hair color"] = 'what hair?';
console.log(me);

//2. Iterate over the object to console.log the propery or key names. 

var keyNames = Object.keys(me);
for (var i in keyNames) {
    console.log("Key name " + i + " in object 'me' is '" + keyNames[i] + "'");
};

