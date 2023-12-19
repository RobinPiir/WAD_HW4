<template>
    <div class="center">
        <div>
        <p><strong>Add a Post</strong></p>
        </div>
        <div class="form">
            <label for="body">Body: </label>
            <input name="body" type="text" id="body" required v-model="post.body" />
        </div>
        <button @click="addPost" class="addPost">Add Post</button>
    </div>
</template>

<script>
export default {
    name: 'AddPostCompo',
    data() {
    return {
      post: {
        date:"",
        body: "",
      },
    };
  },
  methods: {
    addPost() {
        // Generate current date
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];

        this.post.date = formattedDate;

        var data = {
            date: this.post.date,
            body: this.post.body,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then((response) => {
        console.log(response.data);
        // redirect to home view
        this.$router.push("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
};

</script>