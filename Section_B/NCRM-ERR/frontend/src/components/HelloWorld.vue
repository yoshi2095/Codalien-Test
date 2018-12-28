<template>
  <div class="container">
      <p v-for="text in arrayOfTexts">
          {{text}}
          <br/>
      </p>
  </div>
</template>

<script src="./HelloWorld.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .container {
    width: 100%;
   height: 500px;
   border: solid;
   border-color: black;
}
</style>
