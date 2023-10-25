<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div style="background-color: #E7D8D8;" >
    <h1 class="Title" style="padding-left: 2%; padding-top: 3vh; margin-top: 0vh;">Bienvenu chez TaVue</h1>

      
    <div style="display:flex">
      <div>
        <p class="texte_intro" style="margin-right: 20vh; margin-left: 3vh; margin-top: 0%;"> Bienvenue dans le monde de TaVue, où le minimalisme rencontre l'élégance, où l'artisanat français se marie à la modernité. 
            Explorez notre collection et découvrez des lunettes conçues pour ceux qui apprécient la beauté de la simplicité.
            Votre vision, notre passion. TaVue, pour voir le monde avec élégance.
        </p>
        <div id="app" style="margin-left: 50vh;">
        <RouterLink to="/PersonnaliserView" button class="round-button">Personnaliser</RouterLink>
      </div>
      </div>



      <div class="image">
        <img src="../assets/img/lunette_accueil.png" alt="images d'illustration des lunette">
      </div>

  </div>
  </div>

  <h1 class="Title" style="padding-left: 2%;">
    L'élégance à la Française
  </h1>

  <img src="../assets/img/lunette1.jpg" style="width: 75%; height: 75%; display: block; margin: 0 auto;">
  <p class="texte" style="padding-left: 3vh;">
    Notre héritage français est le pilier de notre marque. 
    Toutes nos lunettes sont fabriquées avec fierté en France, dans des ateliers renommés pour leur artisanat inégalé. 
    Chaque paire porte l'essence du savoir-faire français, alliant tradition et innovation.
  </p>

  <h1 class="Title" style="margin-left: 3vh;">
    Minimalisme raffiné
  </h1>

  <div style="display: flex;">
    <p class="texte" style="padding-left: 3vh; margin-left: 0%; margin-right: 3vh;">
      Chez TaVue, nous célébrons la beauté de l'épure. 
      Nos montures sont des symboles de minimalisme raffiné, conçues pour mettre en valeur votre style tout en restant intemporelles. 
      Laissez le minimalisme parler de vous. Vous êtes unique, et vos lunettes devraient l'être aussi. 
      Notre outil de personnalisation vous permet de créer des lunettes qui reflètent votre personnalité.
    </p>

        <img src="../assets/img/cadre_lunette.png" style="width: 100%; height: 100%;">
  </div>

  <p class="texte" style="padding-left: 3vh; margin-top: 0%; padding-bottom: 10vh;">
    Choisissez parmi une variété de montures, de verres et de finitions pour une vision sur mesure. 
    Nous croyons que la vision est une expérience. Nos verres de qualité supérieure offrent une clarté exceptionnelle. 
    Que vous ayez besoin de lunettes de soleil élégantes ou de verres de lecture, la vision est le point de départ de votre style.
  </p>
  </main>
</template>

<style>
.Title{
  font-family: 'GFS Didot', serif;
  font-weight: bold;
}

.texte{
  font-family: 'GFS Didot', serif;
  font-size: x-large;
}

.texte_intro{
  font-family: 'GFS Didot', serif;
  font-size: large;
}

.round-button {
  background-color: #FFEFCF;
  color: black;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  text-decoration: none;
  font-family: 'GFS Didot', serif
}

.round-button:hover {
  background-color: #FFE2AA; /* Couleur de fond au survol */
}

</style>