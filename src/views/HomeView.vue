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
      }
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
  <main>
    <div>
      <roulette class=""
    :size="400" 
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
    >
    <template #baseContent>
      <strong>
        <label class="spin-text"><b>Spin</b></label>
      </strong>
    </template>
  </roulette>
    </div>
  
  <div>
    <div class="res" v-if="res"> 
      <h1>Result</h1>
      <h2>{{res.name}}</h2>
      <span v-html="res.htmlContent"></span>
      <button @click="reset" type="button" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Reset</button>
    </div>
  </div>
  </main>
</template>
<style>
main{
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
main > div{
  margin: 0 3%;
}
.res{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>