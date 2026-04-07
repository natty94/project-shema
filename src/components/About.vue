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
          <p class="adv">Our mission is the to deliver you best services</p>
        </div>
    
            
    </div>
</template>
<style>
.titles{
    text-align: center;
   /*text-decoration: double coral 1px underline;*/
    color: rgb(240, 102, 3);
    font-variant: small-caps;
    font-size: xx-large;
    font-weight: 900;
    text-shadow: 2px 2px 6px coral;
    
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
    animation: bounce 3s infinite  ease-in-out;
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
    background-image: linear-gradient(to right, rgb(131, 225, 238),rgba(115, 218, 247, 0.297),rgb(68, 171, 166),rgba(85, 185, 235, 0.982));
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    box-shadow: 2px 2px 6px coral;
    position:absolute;
    left: 50px;
}
.ad2{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    background-image: linear-gradient(to right, rgb(131, 225, 238),rgba(115, 218, 247, 0.297),rgb(68, 171, 166),rgba(85, 185, 235, 0.982));
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 230px;
}
.ad3{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    background-image: linear-gradient(to right, rgb(131, 225, 238),rgba(115, 218, 247, 0.297),rgb(68, 171, 166),rgba(85, 185, 235, 0.982));
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 410px;
}
.ad4{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    background-image: linear-gradient(to right, rgb(131, 225, 238),rgba(115, 218, 247, 0.297),rgb(68, 171, 166),rgba(85, 185, 235, 0.982));
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 600px;
}
.ad5{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    background-image: linear-gradient(to right, rgb(131, 225, 238),rgba(115, 218, 247, 0.297),rgb(68, 171, 166),rgba(85, 185, 235, 0.982));
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 795px;
}
.ad6{
    box-shadow: 2px 2px 6px coral;
    width: 200px;
    height: 80px;
    background-image: linear-gradient(to right, rgb(131, 225, 238),rgba(115, 218, 247, 0.297),rgb(68, 171, 166),rgba(51, 183, 249, 0.982));
    border: 2px rgb(255, 4, 4) double;
    border-radius: 6px;
    padding-top: 40px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
    left: 950px;
}
h2{
    position: absolute;
    top: 60px;
    left: 510px;
    opacity: 0.8;
}
.adv{
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