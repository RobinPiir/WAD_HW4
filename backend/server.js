// server.js
const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

    //  Handling HTTP requests code will go here  
    // NEW POST

    app.post('/api/posts/', async(req, res) => {
        try {
            console.log("a post request has arrived");
            const post = req.body;
            const newpost = await pool.query(
                "INSERT INTO posttable(date, body) values ($1, $2)    RETURNING*", [post.date, post.body]
    // $1, $2, $3 are mapped to the first, second and third element of the passed array (post.title, post.body) 
    // The RETURNING keyword in PostgreSQL allows returning a value from the insert or update statement.
    // using "*" after the RETURNING keyword in PostgreSQL, will return everything
            );
            res.json(newpost);
        } catch (err) {
            console.error(err.message);
        }
    });


    // GET ALL POSTS

    app.get('/api/posts', async(req, res) => {
        try {
            console.log("get posts request has arrived");
            const posts = await pool.query(
                "SELECT * FROM posttable"
            );
            res.json(posts.rows);
        } catch (err) {
            console.error(err.message);
        }
    });

    // DELETE ALL POSTS

    app.delete('/api/posts', async (req, res) => {
        try {
          console.log("delete posts request has arrived");
          const { rows: deletedPosts } = await pool.query(
            "DELETE FROM posttable RETURNING *"
          );
          res.json(deletedPosts);
        } catch (err) {
          console.error(err.message);
          res.status(500).send("Internal Server Error");
        }
      });

    // GET POST BY ID

    app.get('/api/posts/:id', async(req, res) => {
        try {
            console.log("get a post with route parameter  request has arrived");
            const { id } = req.params; // assigning all route "parameters" to the id "object"
            const posts = await pool.query( // pool.query runs a single query on the database.
                //$1 is mapped to the first element of { id } (which is just the value of id). 
                "SELECT * FROM posttable WHERE id = $1", [id]
            );
            res.json(posts.rows[0]); 
        } catch (err) {
            console.error(err.message);
        }
    });

    // PUT (EDIT) POST BY ID

    app.put('/api/posts/:id', async(req, res) => {
        try {
            const { id } = req.params;
            const post = req.body;
            console.log("update request has arrived");
            const updatepost = await pool.query(
                "UPDATE posttable SET body = $3 WHERE id = $1", [id, post.date, post.body]
            );
            res.json(updatepost);
        } catch (err) {
            console.error(err.message);
        }
    });

    // DELETE POST BY ID

    app.delete('/api/posts/:id', async(req, res) => {
        try {
            const { id } = req.params;
            //const post = req.body; // we do not need a body for a delete request
            console.log("delete a post request has arrived");
            const deletepost = await pool.query(
                "DELETE FROM posttable WHERE id = $1", [id]
            );
            res.json(deletepost);
        } catch (err) {
            console.error(err.message);
        }
    }); 

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});