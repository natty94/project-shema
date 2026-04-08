<template>
    <div class="contain">
        <p class="titles"> UBUMWE Hotel</p>
        <br>
        <div class="ad" ><h2>OUR SERVICES</h2>
          <p class="ad1">•Room booking</p>
          <p class="ad2">•Self service</p>
          <p class="ad3">•Metting Hall</p>
          <p class="ad4">•Free WI-FI</p>
          <p class="ad5">•GYM</p>
          <p class="ad6">•Free Message</p>
          <p class="loc">📍located in Huye District</p>
          <p class="adv">Our mission is the to deliver you best services</p>
        </div>
    
            
    </div>
</template>
<style>
.titles{
    text-align: center;
    text-indent: 80px;
   /*text-decoration: double coral 1px underline;*/
    color: rgb(96, 40, 0);
    font-variant: small-caps;
    font-size: xx-large;
    font-weight: 900;
    text-shadow: 2px 2px 6px rgb(156, 149, 146);
    
}
.contain{
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
.ad{
    display: flex;
    flex-direction: row;
    gap: 180px;
    justify-content: center;
    padding-top: 10px;
    
}
.ad1{
    width: 200px;
    height: 80px;
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    box-shadow: 2px 2px 6px coral;
    position:absolute;
    left: 50px;
    top:110px;
}
.ad2{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 230px;
    top: 90px;
}
.ad3{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 408px;
    top: 120px;
}
.ad4{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 585px;
    top: 90px;
}
.ad5{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 765px;
    top: 70px;
}
.ad6{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 950px;
    top: 120px;
}
h2{
    position: absolute;
    top: 60px;
    left: 510px;
    opacity: 0.8;
}
.adv{
    position: absolute;
    top: 250px;
    font-variant: small-caps;
    font-size: 20px;

}
.loc{
    position: absolute;
    top: 300px;
    font-variant: small-caps;
    font-size: 20px;

}
@keyframes zoom {
    from{
        transform: scale(0.2);
    }
    to{
        transform: scale(1);
    }
}
@keyframes fade {
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
}
@keyframes bounce {
    0%,100%{ 
        transform: translateY(0);
    }
    50%{
        transform: translateY(-20px);
    }
}
</style>