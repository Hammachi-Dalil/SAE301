<script setup>
import { RouterLink } from 'vue-router'
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
                        <RouterLink to="/ConnexionView" button class="nav-btn">Connexion</RouterLink>
                    </div>       
            </nav>
</div>
</template>

<style scoped>
.nav-btn {
  margin-right: 7vh;
  text-decoration: none;
  color: black;
  font-size: xx-large;
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
</style>