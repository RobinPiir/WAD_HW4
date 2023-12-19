<template>
    <body>
        <div class="contentfield">
            <div class="container" v-for="post in posts" :key="post.id">
            <!-- / We are putting an anchor for each post, when we click on it, we will be directed to the specific post view (/apost/) /  -->
                <a class="singlepost" :href="'/apost/' + post.id">
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

@media (min-width: 600px) {
    .header,
    .nav {
        display: flex;
    }

    .header {
        flex-direction: column;
        align-items: center;
    }

    .contentfield{
        width:60%;
    }

    .container{
        width:inherit;
    }

}
@media (min-width: 1000px) {
    .contentfield{
        display:flex;
        width:60%;
        height: auto;
    }
}

body{
    background-color: #DDFACD;
 }

.contentfield{
        background-color: #B1CDA4;
        border: 1px solid black;
        height: auto;
        margin-top: 15px;
        margin-left: auto;
        margin-right: auto;
        display:flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 7em;
    }

.container{
    background-color: white;
    margin-top:7%;
    width: inherit;
    min-width: 300px;
    border:1px solid gray;
    box-shadow: 5px 5px 20px #888888;
    border-radius: 5px;
    text-align: left;
}

.profile{
    border: 1px solid gray;
    margin-left: 10px;
    margin-top: 10px;
}

.post-author{
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
    margin-bottom: 50px;
}

.post-date{
    vertical-align: middle;
    margin-top: 20px;
    float: right;
}

.box-image{
    border: 1px solid gray;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:auto;
    max-height: 20em;
    max-width: 100%;
 }

.comment{
    margin-top: 20px;
    margin-left: 40px;
    vertical-align: top;
}

.like-button{
    border:0px;
    background-color: white;
    margin-left: 30px;
    margin-bottom: 10px;
    padding:5px;
    align-items: left;
}


.like-image{
    width:2em;
    height:auto;
    opacity:100%;
}

.like-button:hover > .like-image{
    opacity: 70%;
}

.reset-button{
    margin: 20px;
    padding: 10px;
}

header time{
    margin-right: 35px;
    text-align: right;
    display: block;
}

</style>