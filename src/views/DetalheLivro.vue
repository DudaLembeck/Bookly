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

      <ion-button @click="$router.push('/home')">
       Voltar
      </ion-button>

     <ion-card>  
        <div id="container" v-if="livro">
     
          <ion-card-header> 
            <ion-card-title>{{ livro.titulo }}</ion-card-title>
            <ion-card-subtitle>{{ livro.autor }}</ion-card-subtitle>
            
          </ion-card-header>  
           <ion-card-content>
        
                <img :src="livro.img" />
             
                <p>{{ livro.descricao }}</p>

                <ion-card-title id="infos">Informações:</ion-card-title>
                <h2>Título: </h2>{{ livro.titulo }}
                <h2>Autor:</h2> {{ livro.autor }}
                <h2>Lançamento: </h2>{{ livro.lancamento }}
              
        </ion-card-content>
    </div>
      </ion-card>
        
          
         
 </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';


const ListaLivros = 
[
  { 
  id: 1, 
  titulo: 'Dom Casmurro',
  autor: "Machado de Assis",
  descricao:"Dom Casmurro é um romance psicológico e realista escrito por Machado de Assis e publicado em 1900. Considerado uma das obras-primas da literatura brasileira, o livro explora a dúvida, o ciúme e a memória através de um narrador cuja fiabilidade é constantemente posta em causa.",
  lancamento:"1900",
  img : "https://images.openai.com/static-rsc-4/Pk793AaWZDDm3YAd-0MEBw8EFewTFsFg5qrKajhmdipUsXobVBv3fUWbyJz7FY8j-CefwhNJCSrdwzJjg49FphQMRx4Ak5dFdlHQQK2WVDwARWPPkXIE-yi6KYk-Ax_waxfjmgcR6UbBzyzIHHWTOkq8q3bzLklkUpwp2BWx1l9A4zOMhPzoKjI44OslpOo5?purpose=fullsize"
  },
   { 
  id: 2, 
  titulo: 'Harry Potter e a Pedra Filosofal',
  autor: "J. K. Rowling",
  descricao:"Harry Potter e a Pedra Filosofal é o primeiro romance da série Harry Potter, escrito por J. K. Rowling. Publicado originalmente em 1997, apresenta o jovem órfão Harry Potter e o seu ingresso no mundo mágico, tornando-se um dos livros infantis mais influentes e vendidos da história contemporânea.",
  lancamento:"1999",
  img : "https://m.media-amazon.com/images/I/81ibfYk4qmL.jpg"
  },
   { 
  id: 3, 
  titulo: 'Orgulho e Preconceito',
  autor: "Jane Austen",
  descricao:"Orgulho e Preconceito (Pride and Prejudice) é um romance clássico de Jane Austen publicado em 1813. Considerado uma das obras mais influentes da literatura inglesa, combina crítica social, ironia e romance, retratando as convenções de classe e género na Inglaterra georgiana.",
    lancamento:"1813",
  img : "https://images.openai.com/static-rsc-4/stLuRvpF9O45f06bR49q9jOSKxotiDOzpmuwMV2SCSAeuoqG65ikcOVnxgOAP8LxCjPAWIJoIoKLSQrpYPnUhVQJLc07EPcjos5RvdLypDAwPlukQcnaM-bRCO7y0LAUDhU-QC5jpKa5PF_ZMAp7S539E0iLoLWi86nqsR-gnBE3GjaH-U6yNxQu575eUCkG?purpose=fullsize"
  },
   { 
  id: 4, 
  titulo: 'O Pequeno Príncipe',
  autor: "Antoine de Saint-Exupéry",
  descricao:"O Pequeno Príncipe (Le Petit Prince) é um livro escrito e ilustrado por Antoine de Saint-Exupéry, publicado originalmente em 1943 nos Estados Unidos. Considerado um dos maiores clássicos da literatura mundial, combina narrativa poética e filosofia sob a aparência de um conto infantil, explorando temas universais como amor, amizade e sentido da vida.",
    lancamento:"1943",
  img : "https://images.openai.com/static-rsc-4/DKnHSAES7NGVdf6kQ53OuaiROgCIQi-7PzhHQhI1XxiAwPqnn9f4xLEozv9r3HvYCHKQSYZSTFMb-8MLH1qum_PBlEs_Bp0oUkOM5dEPg0gOyrBCwAqleoQGbgwbofwbdv1xL5hkFAQ3HBBFhMoQTct_IMVr6gimp29N3qmvE6keSM4Y7foQyAUjemKhZXkk?purpose=fullsize"
  },
   { 
  id: 5, 
  titulo: '1984',
  autor: "George Orwell",
  descricao:"“1984” (também publicado como “Nineteen Eighty-Four”) é um romance distópico escrito por George Orwell e publicado em 1949. A obra descreve um regime totalitário que controla todos os aspetos da vida humana, explorando temas de vigilância, manipulação política e perda da liberdade individual. É amplamente reconhecido como um dos livros mais influentes do século XX.",
    lancamento:"1949",
  img : "https://images.openai.com/static-rsc-4/MF7YEe72HUtByOC-8_w372RWL-JPxz22AnZJscKHeY83b4d8xBWS0GgGL6-VAqkcZQrf6GgDg-JEPaoehjiZzX2EQYKmjXH05aIE2l3hodZksdWaNJOngcp4ZaBCE5iVanenDFhLybsG39s7sumVJz92pRL9_8t2VL9fv7pv7Z-eghqGglz9GNqHb2e4zKOY?purpose=fullsize"
  },
   { 
  id: 6, 
  titulo: 'A Culpa é das Estrelas',
  autor: "John Green",
  descricao:"A Culpa é das Estrelas é um romance juvenil de John Green publicado em 2012. A obra narra a história de dois adolescentes com cancro, Hazel Grace Lancaster e Augustus Waters, que se conhecem num grupo de apoio e vivem um intenso amor marcado pela fragilidade da vida e pela busca de sentido perante a morte. Tornou-se um fenómeno mundial, traduzido em mais de vinte línguas e adaptado ao cinema em 2014.",
    lancamento:"2012",
  img : "https://upload.wikimedia.org/wikipedia/pt/a/a9/The_Fault_in_Our_Stars.jpg"
  }

];
import { computed } from 'vue'
import { useRoute } from 'vue-router';
const route = useRoute();



const livro = computed(() => {
  const id = Number(route.params.id);
  return ListaLivros.find(e => e.id === id)
})

</script>

<style scoped>



h2 {
    color: aliceblue;
    font-size: 20px;
    margin-top: 20px;
}

p {
    margin-top: 30px;
    margin-bottom: 30px;
}

#infos {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 30px;
}

#container h1 {
  color: var(--ion-color-primary-tint);
}

img {
  width: 200px;
}

</style>
