// Code your solution here
const drivers = ["Bob", "William", "Steve", "Mark", "Melvin", "David"]

const findMatching = (m,n) => m.filter(m => m.toLowerCase() === n.toLowerCase());

const fuzzyMatch = (m,n) => m.filter(m => m.charAt(0) === n.charAt(0));

const matchName = (m,n) => m.filter(m => m.name === n)