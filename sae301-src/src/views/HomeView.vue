<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div style="background-color: #E7D8D8;" >
    <h1 class="Title" style="padding-left: 2%; padding-top: 3vh;">Bienvenu chez TaVue</h1>

      
    <div style="display:flex">
      <div>
        <p class="texte" style="margin-right: 20vh; margin-left: 3vh;"> Bienvenue dans le monde de TaVue, où le minimalisme rencontre l'élégance, où l'artisanat français se marie à la modernité. 
            Explorez notre collection et découvrez des lunettes conçues pour ceux qui apprécient la beauté de la simplicité.
            Votre vision, notre passion. TaVue, pour voir le monde avec élégance.
        </p>
        <div id="app" style="margin-left: 50vh;">
        <RouterLink to="/LunetteView" button class="round-button">Personnaliser</RouterLink>
      </div>
      </div>



      <div class="image">
        <img src="../assets/img/lunette_accueil.png" alt="Description de l'image">
      </div>

  </div>
  </div>
  </main>
</template>

<style>
.Title{
  font-family: 'GFS Didot', serif;
  font-weight: bold;
}

.texte{
  font-family: 'GFS Didot', serif;
}

.round-button {
  background-color: #FFEFCF;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}

.round-button:hover {
  background-color: #FFD700; /* Couleur de fond au survol */
}

</style>