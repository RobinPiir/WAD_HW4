<template>
    <body>
        <div class="contentfield">
            <div class="container" v-for="post in posts" :key="post.id">
            <!-- / We are putting an anchor for each post, when we click on it, we will be directed to the specific post view (/apost/) /  -->
                <a class="singlepost" :href="'/api/apost/' + post.id">
                    <span class="post-date"> {{ post.date }} </span><br />
                    <span class="comment">  {{ post.body }} </span> <br />
                </a>
            </div>
        </div>
        <router-link to="/addpost" custom v-slot="{ navigate }">
        <button class="bottom-button" @click="navigate"><h3>Add Post</h3></button>
        </router-link>
        <button class="bottom-button" @click="deletePosts"><h3>Delete all posts</h3></button>
    </body>
</template>



<script>
export default {
  name: "PostsCompo",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    fetchPosts() {
      // You should remember how Fetch API works
      // fetch is a GET request unless stated otherwise. Therefore, it will fetch all posts from the database
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
    deletePosts() {
        fetch("http://localhost:3000/api/posts", {
        method: "DELETE",
          
      })
        .then((response) => { response.json();})
        .then((data) => {
        this.posts = data;
        })
        .catch((err) => console.log(err.message));
    }
  },
  mounted() {
    // call fetchPosts() when this element (AllPosts) mounts 
    this.fetchPosts();
    console.log("mounted");
  },
};
</script>

<style scoped>
* {
  font-family: sans-serif;
  box-sizing: border-box;
}

body {
  background-color: #DDFACD;
  margin: 0;
  padding: 0;
}

.container {
  background-color: white;
  margin-top: 7%;
  width: 90%; /* Adjust as needed */
  max-width: 1200px; /* Adjust as needed */
  border: 1px solid gray;
  box-shadow: 5px 5px 20px #888888;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
}

.contentfield {
  background-color: #B1CDA4;
  border: 1px solid black;
  margin-top: 15px;
  margin-bottom: 2em;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.profile {
  border: 1px solid gray;
  margin-bottom: 10px;
  padding: 10px;
}

.post-author {
  margin-left: 10px;
}

.post-date {
  margin-top: 10px;
  float: right;
}

.box-image {
  border: 1px solid gray;
  display: block;
  margin: 20px auto;
  max-width: 100%;
  height: auto;
}

.comment {
  margin-top: 20px;
  margin-left: 10px;
}

.like-button {
  border: 1px solid #ccc;
  background-color: white;
  margin-left: 10px;
  margin-bottom: 10px;
  padding: 5px 10px;
  display: inline-block;
  cursor: pointer;
}

.like-image {
  width: 1.5em;
  height: auto;
  opacity: 100%;
}

.like-button:hover > .like-image {
  opacity: 70%;
}

.reset-button {
  margin: 20px;
  padding: 10px;
}

header time {
  margin-right: 10px;
  text-align: right;
  display: block;
  color: #646174;
  font-size: 14px;
}

@media (min-width: 600px) {
  .header,
  .nav {
    display: flex;
  }

  .header {
    flex-direction: column;
    align-items: center;
  }

  .contentfield {
    width: 60%;
  }

  .container {
    width: inherit;
  }
}

@media (min-width: 1000px) {
  .contentfield {
    display: flex;
    width: 60%;
    height: auto;
  }
}
</style>