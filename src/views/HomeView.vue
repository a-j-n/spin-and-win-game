<script  >
  import { Roulette } from "vue3-roulette";
  export default {
    name: 'HomeView',
    components: {Roulette},
    computed:{
      test (){
        return 
        [
            { id: 1, name: this.images[0].name, htmlContent: "<img src='"+this.images[0].src+"' class='wheel-icon' /> ", textColor: "", background: this.images[0].color },
            { id: 2, name: this.images[1].name, htmlContent: " <img src='"+this.images[1].src+"' class='wheel-icon' /> ", textColor: "", background: this.images[1].color },
            { id: 3, name: this.images[2].name, htmlContent: " <img src='"+this.images[2].src+"' class='wheel-icon' /> ", textColor: "", background: this.images[2].color },
            { id: 4, name: this.images[3].name, htmlContent: " <img src='"+this.images[3].src+"' class='wheel-icon' /> ", textColor: "", background: this.images[3].color },
            { id: 5, name: "Option 5", htmlContent: "Option 5", textColor: "", background: this.images[0].color },
            { id: 6, name: "Option 6", htmlContent: "Option 6", textColor: "", background: this.images[1].color },
        ];
      },
    },
    data(){
      return{
        res:false,
      duration:5,
      items:[],
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
       launchWheel ($event){
        console.log('lunch',$event);
        this.$refs.wheel.launchWheel();
      },
      wheelEndedCallback (item) {
        console.log('wheel ended');
        console.log(item);   
        this.res = item;
        this.$router.push('/'+item.name);
        // setTimeout(() => {
        //   this.$refs.wheel.reset();
        //   this.res = false;
        // }, 17000);
      },
      reset(){
        this.res = false;
        this.$refs.wheel.reset();
      },
      wheelStartedCallback(){
        console.log('wheel started');
      },
    },
    mounted(){
      this.images.forEach((element,index) => {
        this.items.push({ id: index, name: element.name, htmlContent: "<img src='"+element.src+"' class='wheel-icon' /> ", textColor: "", background: element.color });
      });
    }
    
  }
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <img height="180" class="mx-auto " src="logo-horizntal.webp" />
    </div>
  <div class="d-flex justify-content-center mt-5">
    <div class="">
  <roulette class=""
    :size="450" 
    :base-display="true"
    :base-display-indicator="true" 
    :base-size="100"
    :horizontal-content="false"
    :centered-indicator="true"
    :indicator-size="100"
    :indicator-position="'top'"
    :display-indicator="true"
    :display-shadow="true"
    :easing="'ease'"
    :result-variation="90"
    :duration="duration" 
    ref="wheel"
    :items="items"
    @click="launchWheel" 
    @wheel-end="wheelEndedCallback($event)"
     >
      <template #baseContent>
      <strong>
        <label class="spin-text"><b>Spin</b></label>
      </strong>
      </template>
    </roulette>
    </div>
  </div>

  <div v-if="res" class="d-flex justify-content-center mt-3">
    <div class="card border-success p-3 shadow-sm">
      <h2 v-if="res" class="text-success">You won {{res.name}} <span v-html="res.htmlContent"></span></h2>
      <button @click="reset" class="btn mt-1 btn-primary">Reset</button>
  </div>
</div>
  </div>

</template>
<style>

</style>