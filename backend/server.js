// server.js
const express = require('express');
const pool = require('./database');
const cors = require('cors')
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

    // NEW POST

    app.post('/api/posts/', async(req, res) => {
        try {
            console.log("a post request has arrived");
            const post = req.body;
            const newpost = await pool.query(
                "INSERT INTO posttable(date, body) values ($1, $2)    RETURNING*", [post.date, post.body]
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
            const { id } = req.params; 
            const posts = await pool.query(  
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
            console.log("delete a post request has arrived");
            const deletepost = await pool.query(
                "DELETE FROM posttable WHERE id = $1", [id]
            );
            res.json(deletepost);
        } catch (err) {
            console.error(err.message);
        }
    }); 

    app.post('/auth/signup', async(req, res) => {
        try {
            console.log("a signup request has arrived");
            const { email, password } = req.body;
    
            const salt = await bcrypt.genSalt();
            const bcryptPassword = await bcrypt.hash(password, salt)
            const authUser = await pool.query( 
                "INSERT INTO users(email, password) values ($1, $2) RETURNING*", [email, bcryptPassword]
            );
            console.log(authUser.rows[0].id);
            const token = await generateJWT(authUser.rows[0].id);
            res
                .status(201)
                .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
                .json({ user_id: authUser.rows[0].id })
                .send;
        } catch (err) {
            console.error(err.message);
            res.status(400).send(err.message);
        }
    });
    
    app.post('/auth/login', async(req, res) => {
        try {
            console.log("a login request has arrived");
            const { email, password } = req.body;
            const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
            if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });
            const validPassword = await bcrypt.compare(password, user.rows[0].password);
            if (!validPassword) return res.status(401).json({ error: "Incorrect password" });
    
            const token = await generateJWT(user.rows[0].id);
            res
                .status(201)
                .cookie('jwt', token, { maxAge: 6000000, httpOnly: true })
                .json({ user_id: user.rows[0].id })
                .send;
        } catch (error) {
            res.status(401).json({ error: error.message });
        }
    });
    
    //logout a user = deletes the jwt
    app.get('/auth/logout', (req, res) => {
        console.log('delete jwt request arrived');
        res.status(202).clearCookie('jwt').json({ "Msg": "cookie cleared" }).send
    });

app.listen(port, () => {
    console.log("Server is listening to port " + port)
});