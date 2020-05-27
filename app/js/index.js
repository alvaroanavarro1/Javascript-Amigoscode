/* styling */
require("styles/main.scss");
/* js */
import $ from "jquery";
import { log, logTitle } from "logger";
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