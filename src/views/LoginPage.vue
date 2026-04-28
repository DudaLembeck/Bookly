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
     
          <ion-card-header> 
            <ion-card-title>LOGIN</ion-card-title>
            <ion-card-subtitle>Realize seu Login </ion-card-subtitle>
          </ion-card-header>  
           <ion-card-content>
        
           <h2>Email:</h2>
           <ion-input type="text" placeholder="Insira seu email"></ion-input>
             <h2>Senha:</h2>
           <ion-input type="password" placeholder="Digite sua senha"></ion-input>
           <a @click="$router.push('/recuperar')">Esqueceu sua senha?</a>

           <ion-button expand="block" fill="clear" shape="round">
            ENTRAR
           </ion-button>
              
        </ion-card-content>
    
      </ion-card>
        
          
         
 </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent,IonInput, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';





</script>

<style scoped>
ion-input {
    margin-bottom: 15px;
}

a:hover {
    color: aliceblue;
    transform: scale(1.01);
    transition-duration: 0.2s;
}

ion-card-header {
     display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px;
}

h2 {
    color: aliceblue;
    font-weight: 500;
}

</style>
