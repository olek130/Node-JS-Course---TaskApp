const request = require( "supertest" );
const app = require( "../src/app" );
const Task = require( "../src/models/task" );
const { userOneId, userOne, setupDatabase, taskThree } = require( "./fixtures/db" );

beforeEach( setupDatabase );

test( "Should create task for user", async () => {
	const response = await request( app )
		.post( "/tasks" )
		.set( "Authorization", `Bearer ${ userOne.tokens[0].token }` )
		.send( {
			description: "From my test"
		} )
		.expect( 201 );
	const task = await Task.findById( response.body._id );
	expect( task ).not.toBeNull();
	expect( task.completed ).toEqual( false );
} );

test( "Get all tasks of user one", async () => {
	const response = await request( app )
		.get( "/tasks" )
		.set( "Authorization", `Bearer ${ userOne.tokens[0].token }` )
		.send()
		.expect( 200 );
	
	expect( response.body ).toHaveLength( 2 );
} );

test( "Unauthorized delete", async () => {
	
	const response = await request( app )
		.delete( "/tasks/" + taskThree._id )
		.set( "Authorization", `Bearer ${ userOne.tokens[0].token }` )
		.send()
		.expect( 404 );
	const task = Task.findById( taskThree._id );
	expect( task ).not.toBeNull();
} );