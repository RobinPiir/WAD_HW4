<template>
  <div class="center">
    <div>
      <p><strong>Welcome to the SignUp page!</strong></p>
    </div>
    <form action="index.html">
      <div class="input-group">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Email" required>
      </div>
      <div class="input-group">
        <label for="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          pattern="^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_).{8,15}$"
          title="Password must meet the following criteria:
            - At least 8 characters and less than 15 characters.
            - At least one uppercase alphabet character.
            - At least two lowercase alphabet characters.
            - At least one numeric value.
            - Start with an uppercase alphabet.
            - Include the character '_'."
          required
        >
      </div>
      <button type="submit">Sign Up</button>
    </form>
  </div>
</template>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #646174;
  background-color: #b1cda4;
  border-radius: 5px;
}

.input-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.input-group label {
  margin-bottom: 5px;
}

#sign-up {
  color: blue;
  text-align: center;
  cursor: pointer;
  padding: 5px 5px;
  line-height: 2;
}

#sign-up:hover {
  background-color: #7ebeb6;
  color: #092747;
}

input[type="email"],
input[type="password"] {
  padding: 5px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button[type="submit"] {
  background-color: #04aa6d;
  border: none;
  color: white;
  padding: 15px 15px;
  margin: 15px 4px;
  border-radius: 15px;
  cursor: pointer;
}
</style>