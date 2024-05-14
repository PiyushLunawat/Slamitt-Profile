// Import necessary modules from Next.js and your own defined modules
const { NextResponse } = require('next/server');
const connect = require('../../../lib/db');
const User = require('../../../lib/modals/user');

// Define the GET handler as an asynchronous function
exports.GET = async () => {
    try {
        // Ensure the database connection is established
        await connect();

        // Retrieve all users from the database
        const users = await User.find();

        // Return the users in JSON format using NextResponse
        return NextResponse.json(users);
    } catch (error) {
        // Handle any errors that occur during the process
        console.error("Error in fetching users: ", error);
        return new NextResponse("Error in fetching" + error, { status: 500 });
    }
};
