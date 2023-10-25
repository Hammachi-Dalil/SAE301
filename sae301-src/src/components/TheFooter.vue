<script setup>
</script>

<template>
    <div style="background-color: #FFEFCF;">
        <div style="display: flex; justify-content: space-between;">
            <div>
                <p class="texte_footer" style="margin-left: 3vh;">Suivez-nous sur</p>
                <img src="../assets/img/RS.png" style="margin-left: 3vh;">
            </div>
            <div>
                <p class="texte_footer">Recevez notre newsletter</p>
                <input type="text" placeholder="Votre adresse e-mail" style="margin-left: 0%; margin-bottom: 3vh;" class="custom-input">
            </div>
            <div style="gap: 3vh; display: flex; margin-right: 2vh;">
                <p style="align-self: flex-end;">Mentions légales</p>
                <p style="align-self: flex-end;">CGU</p>
                <p style="align-self: flex-end;">CGV</p>
            </div>
        </div>
    </div>
</template>


<style scoped>
.texte_footer{
    font-family: 'GFS Didot', serif;
    font-size: x-large;
    justify-content: space-between;
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