<script setup >
import { ref } from 'vue';
const wheel = ref(null);
// f07120
const images = [
  { name : 'notebook', src: 'notebook.png',color: '#40bfbf',},
  { name: 'toy',src:'toy.png',color: '#f07120',},
  { name: 'toy2',src:'toy-hat.png',color: '#40bfbf',},
  { name: 'bubbles',src:'bubbles.png',color: '#c4d838',},
]
const duration = 5;

let items = [
  { id: 1, name: "notebook", htmlContent: " <img src='"+images[0].src+"' class='wheel-icon' /> ", textColor: "", background: images[0].color },
  { id: 2, name: "Toy", htmlContent: " <img src='"+images[1].src+"' class='wheel-icon' /> ", textColor: "", background: images[1].color },
  { id: 3, name: "Bubbles", htmlContent: " <img src='"+images[2].src+"' class='wheel-icon' /> ", textColor: "", background: images[2].color },
  { id: 4, name: "Cherry", htmlContent: " <img src='"+images[3].src+"' class='wheel-icon' /> ", textColor: "", background: images[3].color },
  { id: 5, name: "Option 5", htmlContent: "Option 5", textColor: "", background: images[0].color },
  { id: 6, name: "Option 6", htmlContent: "Option 6", textColor: "", background: images[1].color},
];
function launchWheel (){
  wheel.value.launchWheel();
}
 function wheelEndedCallback (item) {
    console.log(item);   
    //wheel.value.reset();
  }
</script>

<template>
  <div>
    <roulette 
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
    >
    <template #baseContent>
      <strong>
        <label class="spin-text"><b>Spin</b></label>
      </strong>
    </template>
  </roulette>
  </div>
</template>
