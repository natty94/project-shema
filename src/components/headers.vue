<template>
    <div class="head">
       <img src="/src/assets/logo.svg" alt="logo" class="logo">
       <p class="name">UBUMWE Hotel</p>
       <div class="links">
        <router-link to="/"><button class="button">Home</button></router-link>
        <router-link to="/book"><button class="button">Book Room</button></router-link>
        <router-link to="/order"><button class="button">Order food</button></router-link>
        <router-link to="/About"><button class="button">About</button></router-link>
        <router-link to="/contact"><button class="button">Contact</button></router-link>
        <router-view/>
       </div>
    </div>
</template>
<style scoped>
.logo{
    position: absolute;
    top: 6px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    position: absolute;
    left: 0%;

}
.head{
    left: 0px;
    top: 5px;
    right: 0px;
    height: 60px;
    border-bottom: 1px solid rgb(255, 89, 28);
    width: 1200px;
}
.links{
    position: absolute;
    left: 600px;
    top: 30px;
    right: 700px;
    display: flex ;
    flex-direction: row;
    gap: 0px;
    width: 200px;
}
.button{
    width: 100px;
    height: 40px;
    border: none;
    background-color: white;
    color: chocolate;
    font-variant: small-caps;
    font-weight: 600;
}
.button:hover{
    background-color:rgba(61, 61, 61, 0.039);
}
.name{
    padding-left: 300px;
    background-color: white;
    color:rgb(179, 116, 33);
    font-size: 30px;
    font-weight: bolder;
    text-shadow: 4px 2px 4px rgb(255, 85, 0);
   /* text-decoration: double 1px crimson underline;*/
    font-family: Georgia, 'Times New Roman', Times, serif;
    letter-spacing: 2px;
}
</style>