const express = require( "express" );
require( "./db/mongoose" );
const userRouter = require( "./routers/user" );
const taskRouter = require( "./routers/task" );

const app = express();
const port = process.env.PORT || 3000;



app.use( express.json() );
app.use( userRouter );
app.use( taskRouter );

app.listen( port, () => {
} );


/**
 * Middleware example
 */
// Middleware function definition - next is needed
// app.use((req,res,next) => {
// 	if(req.method === 'GET'){
// 		res.send('GET requests are disabled');
// 	} else {
// 		next();
// 	}
// });

// app.use( ( req, res, next ) => {
// 	res.status(503).send('Server maintenance');
// } );

/**
 * Bcrypt.js example
 */
// const bcrypt = require('bcryptjs');
//
// const myFunction = async () => {
// 	const password = 'Red12345!';
// 	const hashedPassword = await bcrypt.hash(password, 8);
//
// 	console.log( password );
// 	console.log( hashedPassword );
//
// 	const isMatch = await bcrypt.compare('Red12345!', hashedPassword);
// 	console.log( isMatch );
// };
//
// myFunction();
//
// // Encrypt - reversible
// // Hashed - non-reversible

// const jwt = require( "jsonwebtoken" );
//
// const myFunction = async () => {
// 	const token = jwt.sign( { _id: "abc123" }, "R4nd0mStr1ngH3re", { expiresIn: "7 days" } );
// 	console.log( token );
//
// 	const data = jwt.verify( token, "R4nd0mStr1ngH3re" );
// 	console.log( data );
// };
//
// myFunction();