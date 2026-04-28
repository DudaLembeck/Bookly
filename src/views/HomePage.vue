<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Bookly</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bookly</ion-title>
        </ion-toolbar>
      </ion-header>
        <div class="navbar">
          <ul>
            <li @click="$router.push('/login')">Login</li>
            <li  @click="$router.push('/cadastro')">Cadastro</li>
          </ul>
        </div>
      <div id="container">
        <h1><strong>Bem Vindo(a) ao Bookly!</strong></h1>
        <p>Encontre aqui seus livros favoritos.</p>
      </div>
   
   <div class="lista-livros">
  <ion-card v-for="livro in ListaLivros" :key="livro.id">

    <img :src="livro.img" />

    <ion-card-header>
      <ion-card-title>{{ livro.titulo }}</ion-card-title>
      <ion-card-subtitle>{{ livro.autor }}</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <ion-button @click="$router.push('/livros/' + livro.id)">
        VER DETALHES
      </ion-button>
    </ion-card-content>

  </ion-card>
</div>
        
          
        
 </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonButton, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue';





const ListaLivros = 
[
  { 
  id: 1, 
  titulo: 'Dom Casmurro',
  autor: "Machado de Assis",
  img : "https://images.openai.com/static-rsc-4/Pk793AaWZDDm3YAd-0MEBw8EFewTFsFg5qrKajhmdipUsXobVBv3fUWbyJz7FY8j-CefwhNJCSrdwzJjg49FphQMRx4Ak5dFdlHQQK2WVDwARWPPkXIE-yi6KYk-Ax_waxfjmgcR6UbBzyzIHHWTOkq8q3bzLklkUpwp2BWx1l9A4zOMhPzoKjI44OslpOo5?purpose=fullsize"
  },
   { 
  id: 2, 
  titulo: 'Harry Potter e a Pedra Filosofal',
  autor: "J. K. Rowling",
  img : "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg"
  },
   { 
  id: 3, 
  titulo: 'Orgulho e Preconceito',
  autor: "Jane Austen",
  img : "https://images.openai.com/static-rsc-4/stLuRvpF9O45f06bR49q9jOSKxotiDOzpmuwMV2SCSAeuoqG65ikcOVnxgOAP8LxCjPAWIJoIoKLSQrpYPnUhVQJLc07EPcjos5RvdLypDAwPlukQcnaM-bRCO7y0LAUDhU-QC5jpKa5PF_ZMAp7S539E0iLoLWi86nqsR-gnBE3GjaH-U6yNxQu575eUCkG?purpose=fullsize"
  },
   { 
  id: 4, 
  titulo: 'O Pequeno Príncipe',
  autor: "Antoine de Saint-Exupéry",
  img : "https://images.openai.com/static-rsc-4/DKnHSAES7NGVdf6kQ53OuaiROgCIQi-7PzhHQhI1XxiAwPqnn9f4xLEozv9r3HvYCHKQSYZSTFMb-8MLH1qum_PBlEs_Bp0oUkOM5dEPg0gOyrBCwAqleoQGbgwbofwbdv1xL5hkFAQ3HBBFhMoQTct_IMVr6gimp29N3qmvE6keSM4Y7foQyAUjemKhZXkk?purpose=fullsize"
  },
   { 
  id: 5, 
  titulo: '1984',
  autor: "George Orwell",
  img : "https://images.openai.com/static-rsc-4/MF7YEe72HUtByOC-8_w372RWL-JPxz22AnZJscKHeY83b4d8xBWS0GgGL6-VAqkcZQrf6GgDg-JEPaoehjiZzX2EQYKmjXH05aIE2l3hodZksdWaNJOngcp4ZaBCE5iVanenDFhLybsG39s7sumVJz92pRL9_8t2VL9fv7pv7Z-eghqGglz9GNqHb2e4zKOY?purpose=fullsize"
  },
   { 
  id: 6, 
  titulo: 'A Culpa é das Estrelas',
  autor: "John Green",
  img : "https://upload.wikimedia.org/wikipedia/pt/a/a9/The_Fault_in_Our_Stars.jpg"
  }

];

</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  gap:50px;
}


li {
  color: var(--ion-color-primary);
  transition: 0.3s;
  font-weight: 600;
}

li:hover {
  color: antiquewhite;
  transform: scale(1.01);
}
.lista-livros {
  width: 100%;
  display: grid;
  justify-content: center;
}

ion-card {
  width: 400px;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

#container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#container h1 {
  color: var(--ion-color-primary-tint);
}

img {
  width: 200px;
}

</style>
