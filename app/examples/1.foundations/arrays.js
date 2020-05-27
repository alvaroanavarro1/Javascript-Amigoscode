/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
/* your imports */
logTitle("Arrays");
/* coding examples */

var name = "Alex";
var names = ["Alex", "Maria", "Sam", "Mohammado"];
log(names);

log(names[1]);
log(names.length);

// Loop to print all elements from the array
for (var n of names) {
  log(n);
}

// method to print all elements from the array with the position
names.forEach(function(n, index) {
  log(index + " - " + n);
});