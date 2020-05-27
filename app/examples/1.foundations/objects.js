/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
import { longStackTraces } from "bluebird";
/* your imports */
logTitle("Objects");
/* coding examples */

var name = "Maria Jones";
var age = 21.5;
var hasDriverLicence = true;

log(name);

var person = {
    name: "Maria Jones",
    age: 21,
    hasDriverLicence: true,
    dateOfBirth: "01/01/2000",
    address: {
      firstLine: "123",
      postCode: "SE1",
      country: "England"
    }
  };
  
log(JSON.stringify(person));
log(person.name); // Example to log one characteristic from object

log(Object.values(person)); // For all the characteristics

// for Object into a object
log(Object.values(person.address));
log(JSON.stringify(person.address));