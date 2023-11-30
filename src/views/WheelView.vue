<template>
    <main id="" class="container">
        <div class="d-flex justify-content-center">
      <img height="180" class="mx-auto " src="logo-horizntal.webp" />
    </div>
      <section class="d-flex justify-content-center mt-4">
        <Roulette
          ref="wheel"
          :items="items"
          :centered-indicator="wheelSettings.centeredIndicator"
          :indicator-position="wheelSettings.indicatorPosition"
          :size="wheelSettings.size"
          :display-shadow="wheelSettings.displayShadow"
          :display-border="wheelSettings.displayBorder"
          :display-indicator="wheelSettings.displayIndicator"
          :duration="wheelSettings.duration"
          :result-variation="wheelSettings.resultVariation"
          :easing="wheelSettings.easing"
          :counter-clockwise="wheelSettings.counterClockwise"
          :horizontal-content="wheelSettings.horizontalContent"
          :base-display="wheelSettings.baseDisplay"
          :base-size="wheelSettings.baseSize"
          :base-display-indicator="wheelSettings.baseDisplayIndicator"
          :base-display-shadow="wheelSettings.baseDisplayShadow"
          :base-background="wheelSettings.baseBackground"
          @click="launchWheel"
          @wheel-end="wheelEndedCallback"
        >
          <template #baseContent>
            <div class="arrow-roullete" v-html="wheelSettings.baseHtmlContent" />
          </template>
        </Roulette>
      </section>
    </main>
  </template>
  <script setup>
  // vue
  import { ref, onMounted, computed } from "vue";
  import { useRoute, useRouter } from "vue-router";
  // Roullete
  import { Roulette } from "vue3-roulette";
  //
  const wheel = ref(null);
  const router = useRouter();
  const items = [
    {
      id: 1,
      name: "politecnicos_destacados",
      htmlContent: "Politécnicos <br> Destacados",
      textColor: "",
      background: "",
    },
    {
      id: 2,
      name: "doble_turno",
      htmlContent: "Doble <br> turno",
      textColor: "",
      background: "",
    },
    {
      id: 3,
      name: "creaciones_politecnicas",
      htmlContent: "Creaciones <br> Politécnicas",
      textColor: "'#fff'",
      background: "#af03ff",
    },
    {
      id: 4,
      name: "instituciones_ipn",
      htmlContent: "Instituciones del <br> IPN",
      textColor: "",
      background: "",
    },
    {
      id: 5,
      name: "turno_sorpresa",
      htmlContent: "Turno <br> sorpresa",
      textColor: "",
      background: "",
    },
    {
      id: 6,
      name: "pierde_turno",
      htmlContent: "Pierde un <br> turno",
      textColor: "",
      background: "",
    },
  ];
  const wheelSettings = {
    centeredIndicator: true,
    indicatorPosition: "top",
    size: 550,
    displayShadow: true,
    duration: 6,
    resultVariation: 90,
    easing: "ease",
    counterClockwise: true,
    horizontalContent: false,
    displayBorder: true,
    displayIndicator: false,
    baseDisplay: true,
    baseSize: 210,
    baseDisplayShadow: false,
    baseDisplayIndicator: false,
    // baseBackground: "",
    baseBackground: "",
    baseHtmlContent:
      "<img class='' src='https://canalonce.mx/REST/data/images/ruleta-flecha-1.webp' alt='' srcset=''>",
  };
  const parseoTexto = (cadena) => {
    let txt = String(cadena);
    let textParser = txt.replaceAll(" ", "-");
    textParser = textParser.toLowerCase();
    textParser = eliminarAcentos(textParser);
    return eliminarCaracteres(textParser);
  };
  const eliminarAcentos = (cadena) => {
    var chars = {
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      à: "a",
      è: "e",
      ì: "i",
      ò: "o",
      ù: "u",
      ñ: "n",
      Á: "A",
      É: "E",
      Í: "I",
      Ó: "O",
      Ú: "U",
      À: "A",
      È: "E",
      Ì: "I",
      Ò: "O",
      Ù: "U",
      Ñ: "N",
    };
    var expr = /[áàéèíìóòúùñ]/gi;
    var res = cadena.replace(expr, function (e) {
      return chars[e];
    });
    return res;
  };
  const eliminarCaracteres = (cadena) => {
    var outString = cadena.replace(
      /[`~!¡@#$%^&*()_|+\=¿?;:'",.<>\{\}\[\]\\\/]/gi,
      ""
    );
    return outString;
  };
  const launchWheel = () => {
    wheel.value.launchWheel();
  };
  const wheelEndedCallback = (evt) => {
    let question = parseoTexto(evt.name);
    // router.push("/question/" + question);
  };
  </script>
  <style scoped>
  #wrapper {
    display: flex;
    align-items: center;
    height: 100vh;
    width: 100%;
  }
  </style>
  