import bcrypt from 'bcrypt';

const password = "mypassword";
const hashed = await bcrypt.hash(password, 10);

const isMatch = await bcrypt.compare("mypassword", hashed);
console.log(isMatch); // should print true
