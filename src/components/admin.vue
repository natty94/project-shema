<template>
    <div class="admi">
         <p class="well">Welcome 👨‍💼</p>
         <p class="win"><span class="spa">You have logged as the manager</span><br><br>here you can register new rooms<br>⬇️</p>
         <router-link to="/admin/register"><button class="admin">Register New Room</button></router-link>
         <router-view/>
    </div>
</template>

<style>
.admi{
    background-color: #f9f9ff;
     border: rgb(255, 94, 0) 2px solid;
    border-radius: 4px;
    box-shadow: 2px 2px 4px coral;
    position: absolute;
    left: -580px;
    top: 80px;
    height: 360px;
    width: 1200px;
    text-align: center;
    animation: bounce 10s infinite  ease-in-out;
}
.admin{
    position: relative;
    top: 30px;
    width: 650px;
    height: 35px;
    text-overflow: clip;
    text-transform: capitalize;
    border: 1px rgb(205, 93, 153) solid;
    border-radius: 4px;
    box-shadow: 3px 3px 3px 2px rgb(255, 171, 2);
    background-color: coral;
}
.well{
    font-size: xx-large;
    text-transform: uppercase;
    animation: fade 3s infinite  ease-in;
    font-variant: small-caps;
}
.win{
    font-variant: small-caps;
}
.spa{
    color: rgb(35, 2, 19);
}
</style>