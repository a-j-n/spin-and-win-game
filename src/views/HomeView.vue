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
            { id: 2, name: "Toy", htmlContent: " <img src='"+this.images[1].src+"' class='wheel-icon' /> ", textColor: "", background: this.images[1].color },
            { id: 3, name: "Bubbles", htmlContent: " <img src='"+this.images[2].src+"' class='wheel-icon' /> ", textColor: "", background: this.images[2].color },
            { id: 4, name: "Cherry", htmlContent: " <img src='"+this.images[3].src+"' class='wheel-icon' /> ", textColor: "", background: this.images[3].color },
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
      { name : 'notebook', src: 'notebook.png',color: '#c4d838',},
      { name: 'toy',src:'toy.png',color: '#20ccc7',},
      { name: 'toy2',src:'toy-hat.png',color: '#f1700f',},
      { name: 'bubbles',src:'bubbles.png',color: '#e23326',},
      ],
      }  
    },
    methods:{
      launchWheel (){
        this.$refs.wheel.launchWheel();
      },
      wheelEndedCallback (item) {
      console.log(item);   
      this.res = item;
        //wheel.value.reset();
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
      this.items.push({ id: 5, name: "Option 5", htmlContent: "Option 5", textColor: "", background: this.images[0].color });
      this.items.push({ id: 6, name: "Option 6", htmlContent: "Option 6", textColor: "", background: this.images[1].color });
    }
    
  }
</script>

<template>
  <div class="container">
  <div class="d-flex justify-content-center mt-5">
    <div class="">
      <roulette class=""
    :size="500" 
    :base-display="true"
    :base-display-indicator="true" 
    :base-size="100"
    :horizontal-content="false"
    :centered-indicator="true"

    :indicator-size="100"
    :indicator-position="'top'"
    :display-indicator="true"
    :display-shadow="true"
    :easing="'bounce'"

    :duration="duration" 
    ref="wheel"
    :items="items"
    @click="launchWheel" 
    @wheel-end="wheelEndedCallback"
    @wheel-start="wheelStartedCallback"
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
    <div class="card">
      <h2 v-if="res">You won {{res.name}} <span v-html="res.htmlContent"></span></h2>
      <button @click="reset" class="btn btn-primary">Reset</button>
  </div>
</div>
  </div>
</template>
<style>

</style>