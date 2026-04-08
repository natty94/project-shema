<template>
    <div class="regime">
        <h3 class="titles">Register a new Room</h3>
        <form class="regi">
            <input type="text" placeholder="Enter room name">
            <input type="text" placeholder="Enter room number">
            <input type="submit" value="Register Room" class="sub">
        </form>
    </div>
</template>

<style>
.regime{
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
    justify-content: center;
}
.regi{
    display:flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 250px;
    padding-top: 90px;
}
.regi input{
     width: 850px;
    height: 35px;
    text-overflow: clip;
    text-transform: capitalize;
    border: 1px rgb(205, 93, 153) solid;
    border-radius: 4px;
    box-shadow: 3px 3px 3px 2px rgb(255, 171, 2);
}
.titles{
    position: absolute;
    top: 6px;
    left: 330px;
    color: black;
}
</style>