<template>
  <div class="home">
    <section class="hero">
      <h1>Welcome to UBUMWE Hotel</h1>
      <p>Luxury and comfort in the heart of Huye district.</p>
      <router-link to="/book" class="cta-button">Book a Room Now</router-link>
      <router-view/>
    </section>
    
    <section class="features">
      <div class="feature-card">
        <h3>World Class Suites</h3>
        <p>Experience elegance and peace.</p>
      </div>
      <div class="feature-card">
        <h3>Local Cuisine</h3>
        <p>Delicious meals from our top chefs.</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.home{
  position: absolute;
  left: -570px;
  top: 90px;
  width: 1200px;
  animation: bounce 3s ease-in-out;

}
.hero { text-align: center; padding: 100px 20px; background: #f4f4f9; border: rgb(255, 94, 0) 2px solid;
    border-radius: 4px;
    box-shadow: 2px 2px 4px coral; }
.cta-button { background: #da7400; color: rgb(241, 229, 192); padding: 15px 30px; text-decoration: none; border-radius: 5px; }
.features { display: flex; justify-content: space-around; padding: 50px; }
.feature-card { border: 1px solid #ddd; padding: 20px; border-radius: 8px; width: 30%; }
@keyframes bounce {
    0%,100%{ 
        transform: translateY(0);
    }
    50%{
        transform: translateY(-20px);
    }
}
</style>