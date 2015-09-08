// JavaScript-Assessment-1 ... arrays.js

//1. What is the length of the following contacts array?

var contacts = [];
console.log(contacts.length); // zero

//2. Add the following people to the contacts array.

var jake = {
    name: 'Jake Overall ',
    email: 'jake.overall@boisecodeworks.com',
    title: 'founder'
};
var matt = {
    name: 'Matt Overall ',
    email: 'matt.overall@boisecodeworks.com',
    title: 'founder'
};
var chris = {
    name: 'Chris Hoyd   ',
    email: 'chris.hoyd@boisecodeworks.com  ',
    title: 'founder'
};
var tony = {
    name: 'Tony Carolla ',
    email: 'tony.carolla@gmail.com         ',
    title: 'mentor'
};
var andrew = {
    name: 'Andrew Hansen',
    email: 'andrew.hansen@gmail.com        ',
    title: 'mentor'
};
var stefan = {
    name: 'Stefan Nuxoll',
    email: 'stefan.nuxoll@gmail.com        ',
    title: 'mentor'
};

contacts.push({ name: jake.name, email: jake.email, title: jake.title });
contacts.push({ name: matt.name, email: matt.email, title: matt.title });
contacts.push({ name: chris.name, email: chris.email, title: chris.title });
contacts.push({ name: tony.name, email: tony.email, title: tony.title });
contacts.push({ name: andrew.name, email: andrew.email, title: andrew.title });
contacts.push({ name: stefan.name, email: stefan.email, title: stefan.title });
console.log(contacts.length); // six

// 3. Woops after adding all of those people to the same contacts 
// list you realized you need a list just the mentors. Create a new 
// variable namedmentors populate it using contacts array. 

var namedmentors = [];
for (var i in contacts) {
    if (contacts[i].title === 'mentor') {
        namedmentors.push({ name: contacts[i].name, email: contacts[i].email, title: contacts[i].title });
    }
};

function listContacts() {
    console.log("Contact List ---------------------------------------------");
    for (var i = 0; i < contacts.length; i++) {
        console.log(contacts[i].name + " | " + contacts[i].email + " | " + contacts[i].title);
    }
}

listContacts();

function listNamedMentors() {
    console.log("Mentors List ---------------------------------------------");
    for (var i = 0; i < namedmentors.length; i++) {
        console.log(namedmentors[i].name + " | " + namedmentors[i].email + " | " + namedmentors[i].title);
    }
}

listNamedMentors();
