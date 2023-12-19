<template>
    <body>
        <div class="contentfield">
            <div class="container" v-for = "post in postList" :key="post.id">
                <header class="box-header">
                    <img class="profile" :src="getImgUrl(post.authorAvatar)" alt="pic" width="50" height="50">
                    <p class="post-author">{{ post.authorName }}</p>
                    <time class="post-date">{{ post.createTime }}</time>
                </header>
                <img class="box-image" v-if="post.image != null" :src="getImgUrl(post.image)" alt="pic">
                <p class="comment">{{ post.body }}</p>
                <footer class=box-footer>
                <button class="like-button" @click="likePost(post)"><img src="../assets/like.png" alt="like-button" width="50" height="50" class="like-image">{{ post.likes }}</button>
                </footer>
            </div>
            <button class="reset-button" @click="resetAllLikes"><h3>Reset all likes</h3></button>
        </div>
    </body>
</template>

<script>
export default {
    name: "PostsCompo",
    data: function() {
return {

}},
computed: {
    postList(){
        return this.$store.state.postList
    }},
methods: {
    getImgUrl(pic) {
    return require('../assets/'+pic)
    },
    likePost(post) {
      // Increment the likes for the clicked post
      post.likes++;
    },
    resetAllLikes() {
      // Reset all likes to their original values
      this.postList.forEach(post => {
        // Assuming you have an originalLikes property in each post
        post.likes = 0
      });
    }}
}
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