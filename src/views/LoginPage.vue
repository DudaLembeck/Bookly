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
        <div v-if="Login">
           <h2 >Email:</h2>
           <ion-input  v-model="email" type="text" placeholder="Insira seu email"></ion-input>
             <h2>Senha:</h2>
           <ion-input  v-model="senha" type="password" placeholder="Digite sua senha"></ion-input>
           <a @click="$router.push('/recuperar')">Esqueceu sua senha?</a>

           <ion-button  @click="entrar" expand="block" fill="clear" shape="round">
            ENTRAR
           </ion-button>
              </div>
        </ion-card-content>
    
      </ion-card>
        
          
         
 </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent,IonInput, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';


import { ref } from 'vue'
import { computed } from 'vue'

const usuarioValido = computed(() => {
  return Login.some(user => 
    user.email === email.value && user.senha === senha.value
  )
})

const entrar = () => {
  if (usuarioValido.value) {
    // login correto
    window.location.href = '/home'
  } else {
    alert('Email ou senha inválidos')
  }
}

const email = ref('')
const senha = ref('')

const Login = [ 
    { 
        email: "marialembeck@gmail.com", 
        senha: "123" 
    }, 
    { 
        email: "karinameier@gmail.com",
        senha: "123" 
    } 
]

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
