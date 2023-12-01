<template>
    <div class="container">

    <div class="d-flex justify-content-center">
      <img height="180" class="mx-auto" src="logo-horizntal.webp" />
    </div>
    
    <div  class="d-flex justify-content-center mt-5">
        <div class="card border-success p-3 shadow-sm">
            <h2 class="text-success">You won  {{ $route.params.name }} <img :src="getImage()"  class='wheel-icon image-rounded' /> </h2>
            
            <a href="/" @click="reset" class="btn mt-2 btn-primary">Reset</a>
        </div>
    </div>
    
    </div>
</template>

<script >
    export default{
        name:'Result',
        data(){
            return{
                images : [
                { name: 'Slime',src:'slime.png',color: '#f1700f',},
                { name: 'Bubbles',src:'bubbles.png',color: '#e23326',},
                { name:'Squeezing',src:"Squeezing-ball.png",color:"#c4d838" },
                { name: 'Play dough',src:'play-dough-toy.png',color: '#20ccc7',},
            
                { name : 'Coloring & activity book', src: 'notebook.png',color: '#f1700f',},
                {name: 'Magic spring',src:'magic-spring.png',color: '#e23326',},
                {name:'Ice  spray',color:"#c4d838",src:"ice-spray.png"},
                {name:'Beep',color:"#20ccc7",src:"beep.png"}
                ],
            }
        },
        methods:{
            getImage(){
                let image = this.images.find((element) => {
                    return element.name == this.$route.params.name;
                });
                return image.src;
            }
        }
        
           
    }
</script>
<style>
.card{
    min-width: 60%;
}
</style>