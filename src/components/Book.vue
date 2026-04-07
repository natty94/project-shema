<template>
    <div class="form">
        <form class="book">
            <h2 class="tit">Book room</h2>
            <br>
            <input type="text" placeholder="Ensert your name"/>
            <input type="text" placeholder=" enter your E-mail"/>
            <input type="date" />
            <br>
            <input type="submit" value="Confirm" class="sub"/>
        </form>
    </div>
</template>

<style>
.form{
    width:1200px;
    position: absolute;
    left: -580px;
    height: 370px;
    top: 70px;
    background-color: #f9f9ff;
    display: flex;
    justify-content: center;
    border: rgb(255, 94, 0) 2px solid;
    border-radius: 4px;
    box-shadow: 2px 2px 4px coral;
    animation: zoom 2s ease-in-out;
}
.book{
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: absolute;
    top: 80px;
}
.book input{
    width: 850px;
    height: 35px;
    text-overflow: clip;
    text-transform: capitalize;
    border: 1px rgb(205, 93, 153) solid;
    border-radius: 4px;
    box-shadow: 3px 3px 3px 2px rgb(255, 171, 2);
}
.book input:focus{
    border: 1px solid black;
}
.tit{
    position: absolute;
    top: -75px;
    left: 330px;
}
.sub{
    background-color: chocolate;
}
@keyframes zoom {
    from{
        transform: scale(0.2);
    }
    to{
        transform: scale(1);
    }
}
</style>