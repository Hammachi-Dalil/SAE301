<script setup>
import { RouterLink } from 'vue-router'

import { ref, onMounted} from 'vue'

import PocketBase from 'pocketbase'
// Objet pocketBase

/*
var pocketbase_ip = "";
if (import.meta.env.MODE === "production")
  pocketbase_ip = "http://193.168.146.198/";
else pocketbase_ip = "http://127.0.0.1:8090/";
const pb = new PocketBase(pocketbase_ip);
*/
const pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE)


// user connecté ? au départ faux
let isConnected = ref(false)

// Element de connexion
let user = ref('')
let psw = ref('')

// User connecté
let currentUser = ref(null)
let avatar = ref(null)

// Au montage du composant
onMounted(async () => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = () => {
  if (pb.authStore.isValid) {
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      + currentUser.value.collectionId     // Id ou name de la collection concernée
      + "/"
      + currentUser.value.id               // Id de l'utilisateur connecté
      + "/"
      + currentUser.value.avatar           // Nom fichier image pocketbase
      + "?thumb=100x100"                   // Taille par défaut     

    //      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async () => {
  try {
    const authData = await pb.collection('users')
      .authWithPassword(user.value, psw.value)
    //    console.log("connecté : ",authData)
    refresh()
  } catch (error) {
    //    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = () => {
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value = false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({ name: "HomeView" })
}
</script>

<template>
    <div style="background-color: #FFEFCF;">
            <nav class="header-nav">
                <router-link to="/">
                    <img src="../assets/img/LOGO.png" class="logo">
                </router-link>
                    <div style="text-align: right; margin-right: 10vh;">
                        <RouterLink to="/" button class="nav-btn">Accueil</RouterLink>
                        <RouterLink to="/LunetteView" button class="nav-btn">Lunettes</RouterLink>
                        <RouterLink to="/PersonnaliserView" button class="nav-btn">Personnaliser</RouterLink>
                        <RouterLink to="/ConnexionView" button class="nav-btn">Inscription</RouterLink>
                    </div> 
                    <div class="ml-auto" style="padding-left: 5px;">
      <span v-if="isConnected" style="justify-content: flex-end;">
        <button class="round-button-header" style="margin-right: 2vh;">
          <i>{{ currentUser.username }}</i>
        </button>
        <button class="round-button-header" type="button" @click="deconnect">
          <i class="fa fa-sign-out">Déconnecter</i>
        </button>
      </span>

      <form v-else class="login-form">
        <input placeholder="Login" v-model="user" class="custom-input">
        <input placeholder="Password" v-model="psw" class="custom-input" style="margin-left: 2vh;" type="password">
        <button type="button" class="round-button-header" @click.prevent="connect" style="margin-left: 2vh;">
          <i class="fa fa-power-off"></i> Connexion
        </button>
      </form>
    </div>      
            </nav>
</div>
</template>

<style scoped>
.nav-btn {
  margin-right: 7vh;
  text-decoration: none;
  color: black;
  font-size: large;
  font-family: 'GFS Didot', serif;
}

.header-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.logo {
  align-self: flex-start;
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

.round-button-header {
  background-color: #98B0D5;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  font-family: 'GFS Didot', serif
}

.round-button-header:hover {
  background-color: #FFE2AA; /* Couleur de fond au survol */
}
</style>