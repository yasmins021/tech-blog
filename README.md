## Social Network API
This is a social network API that allows users to create, update, and delete users, thoughts, reactions, and friends. This application uses Node.js, Express.js, Mongoose, and MongoDB.
## Usage
To use this application, follow these steps:

Invoke the application by running npm start.
The Mongoose models will be synced to the MongoDB database.
Open Insomnia and test the following API routes:
GET /api/users - to get all users
GET /api/users/:id - to get a specific user by ID
POST /api/users - to create a new user
PUT /api/users/:id - to update a specific user by ID
DELETE /api/users/:id - to delete a specific user by ID
GET /api/thoughts - to get all thoughts
GET /api/thoughts/:id - to get a specific thought by ID
POST /api/thoughts - to create a new thought
PUT /api/thoughts/:id - to update a specific thought by ID
DELETE /api/thoughts/:id - to delete a specific thought by ID
POST /api/thoughts/:id/reactions - to create a reaction to a specific thought by ID
DELETE /api/thoughts/:thoughtId/reactions/:reactionId - to delete a reaction to a specific thought by ID
POST /api/users/:userId/friends/:friendId - to add a friend to a user's friend list
DELETE /api/users/:userId/friends/:friendId - to remove a friend from a user's friend list
License








