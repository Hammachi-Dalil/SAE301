<script setup>
import SignIn from "../components/SignIn.vue";
import PocketBase from "pocketbase";
</script>

<template>
    <div class="wrapper" id="signOut" style="text-align: center;">
      <h1 class="Title">Rejoignez TaVue</h1>
      <label>Adresse mail: </label><br />
      <input
        class="custom-input"
        style="margin-bottom: 2vh;"
        type="email"
        required
        id="email"
        placeholder="email"
      /><br />

      <label>Nom d'utilisateur: </label><br />
      <input 
        class="custom-input"
        style="margin-bottom: 2vh;"
        type="text" 
        required 
        id="username"
        placeholder="nom d'utilisateur"
         />
        <br />


      <label>Mot de passe: </label><br />
      <input
      class="custom-input" 
        style="margin-bottom: 2vh;"
        type="password" 
        required 
        id="passwd"
        placeholder="Mot de passe"
         />
        <br />

      <button class="round-button" style="margin-left: 1vh;" v-on:click="register()">S'inscrire</button>

      <button class="round-button" style="margin-left: 1vh;" v-on:click="loginGithub()">Se connecter avec Github</button>
      <p><label id="status"> Vous n'etes pas connecté avec github </label><br /></p>

     <span id="user-name"></span>
     <span id="user-nom" style="margin-left: 1vh;"></span>
    </div>
  </template>


<script>
var connected = false;
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "http://193.168.146.198/";
else pocketbase_ip = "http://127.0.0.1:8090/";
const pb = new PocketBase(pocketbase_ip);

var currentUser;
export default {
  methods: {
    //this method allows a new user to sign up the system. Once done, the user receives an email
    //asking for account validation. Once the validation made the user is added to the system
    //this method allows the already registred user to log in the system.
    async register() {
      currentUser = await pb.collection("users").create({
        email: document.getElementById("email").value,
        password: document.getElementById("passwd").value,
        passwordConfirm: document.getElementById("passwd").value,
        username: document.getElementById("username").value,
        name: "John Di",
      });
      if (currentUser) {
        document.getElementById("status").innerHTML =
          "Nous vous avons envoyer un mail de vÃ©rifictaion..";
        await pb
          .collection("users")
          .requestVerification(document.getElementById("email").value);
      }
    },
    async googlelogin() {
      await pb.collection("users").authWithOAuth2({ provider: "google" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in";
        connected = true;
        currentUser = pb.authStore.model;
        document.getElementById("signOut").style.visibility = "hidden";
        document.getElementById("addPoem").style.visibility = "visible";
      }
    },
    async loginGithub() {
      await pb.collection("users").authWithOAuth2({ provider: "github" });
      if (pb.authStore.isValid) {
        document.getElementById("status").innerHTML = "You are now logged in Github";
        connected = true;
        currentUser=pb.authStore.model;
      }
    },
    async createPoem() {
      const record = await pb.collection("poems").create({
        title: document.getElementById("title").value,
        content: document.getElementById("content").value,
        private: document.getElementById("notpublic").value,
        email: currentUser.email,
        illustration: document.getElementById("file").files[0],
      });
    },
},
};
</script>

<style scoped>
.Title{
  font-family: 'GFS Didot', serif;
  font-weight: bold;
}

.custom-input {
  border: 2px solid #939393;
  border-radius: 10px; 
  width: 200px; 
  height: 30px; 
  padding: 5px; 
}

.custom-input::placeholder {
  color: #939393; 
}
</style>

