<template>
    <div class="cont">
        <p class="the"> Contact us on</p>
        <p class="natty"> <span class="reel">✉️Email:</span> ubumwehotel@gmail.com</p> 
        <p class="natty"> <span class="reel">📞Telephone:</span> 0725825567</p>
        <p class="natty"><span class="reel">instegram:</span> @t__natty</p>
        <p class="natty"><span class="reel">LinkedIn: </span>@t__natty</p>
    </div>
</template>

<style>
.cont{
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
    animation: bounce 3s infinite  ease-in-out;
    color: rgb(176, 70, 0);
}
.the{
    text-transform: capitalize;
    font-variant: small-caps;
    font-size: 20px;
    font-weight: 600;

}
.natty{
    border: 3px rgb(255, 102, 0) solid;
    border-radius: 2px;
    box-decoration-break: slice;
    box-shadow: outset 2px 3px 5px rgb(255, 106, 0);
    color: rgb(224, 148, 101);
    width: 300px;
    height: 25px;
    position: relative;
    left: 450px;
    padding-left:0px;
    padding-top: 5px;
}
.reel{
    color: black;
    font-size: 15px;
    font-variant: small-caps;
}
</style>