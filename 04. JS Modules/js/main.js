/**
 * <script type='module'></script>
 * the above html declaration is gonna make javascript script automatically use "use strict" and using defer property automatically
 */
// import playGuitar, {
//   shredding as shred,
//   plucking as fingerpicking,
// } from "./guitars.js";
import * as Guitars from "./guitars.js";
import User from "./User.js";

const user = new User("benzion@gmail.com", "Benzion Yehezkel");
console.log(user, user.greeting());

Guitars.default();
Guitars.plucking();
Guitars.shredding();
