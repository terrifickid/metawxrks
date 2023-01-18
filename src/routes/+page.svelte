<script>
  let currentSrc = 0;
  let videoSources = ["m2.webm"];

  setInterval(() => {
    // currentSrc = (currentSrc + 1) % videoSources.length;
    console.log(currentSrc);
  }, 10000);
</script>

<div class="font-ibm bg-black">
  <div class="p-6 flex items-center  fixed z-10 top-0 w-screen">
    <svg viewBox="0 0 200 13.90913784000527" class="css-1j8o68f w-36"
      ><defs id="SvgjsDefs1085" /><g
        id="SvgjsG1086"
        featurekey="6sJQsk-0"
        transform="matrix(0.9669136450184936,0,0,0.9669136450184936,0.2360237114856921,-5.618068372521127)"
        fill="#ffffff"
        ><path
          d="M2.5684 6.122999999999999 l0 14.072 l-2.8125 0 l0 -14.072 l2.8125 0 z M13.105 6.122999999999999 l0 14.072 l-2.8027 0 l0 -9.5508 l-3.8672 4.7266 l-3.1934 -3.9063 l0 -4.3848 l3.1934 3.916 l3.9746 -4.873 l2.6953 0 z M34.7177484375 14.5215 l-5.9082 0 l0 -2.7148 l5.9082 0 l0 2.7148 z M37.0131484375 6.132999999999999 l0 2.7148 l-8.8574 0 l0 8.6328 l8.8574 0 l0 2.7148 l-11.67 0 l-0.0097656 -14.063 l11.68 0 z M49.191406875 6.122999999999999 l9.4531 0 l0 2.7148 l-9.4531 0 l0 -2.7148 z M52.521446875 9.619 l2.8027 0 l0 10.576 l-2.8027 0 l0 -10.576 z M85.5302109375 20.19531 l-3.1152 0 l-0.9375 -1.9336 l-5.8887 0 l1.3184 -2.7148 l3.2422 0 l-2.002 -4.1016 l-4.2773 8.75 l-3.1152 0 l7.3926 -14.385 z M99.83793125 6.122999999999999 l-0.48828 1.7383 l0 0 l0.48828 12.334 l-2.8125 0 l0 -14.072 l2.8125 0 z M110.37453125 6.122999999999999 l0 14.072 l-2.6953 0 l-3.9746 -4.873 l-3.1934 3.916 l0 -4.3848 l3.1934 -3.9063 l3.8672 4.7266 l0 -9.5508 l2.8027 0 z M137.4266796875 6.122999999999999 l-11.455 14.072 l-3.5645 0 l5.7129 -7.0313 l-5.7227 -7.041 l3.5742 0 l3.9355 4.8438 l3.9453 -4.8438 l3.5742 0 z M132.1630796875 13.7402 l5.2539 6.4551 l-3.5645 0 l-3.4766 -4.2676 z M160.660078125 17.7441 l-3.5742 0 l-4.834 -5.9668 l3.3984 0 q1.435546875 -0.0390625 1.9140625 -0.5078125 q0.283203125 -0.2734375 0.283203125 -0.859375 q0 -0.859375 -0.390625 -1.220703125 q-0.41015625 -0.390625 -0.986328125 -0.3515625 l-0.068359 0 l-4.6289 0 l0 11.357 l-2.8125 0 l0 -14.072 l7.4121 0 q1.806640625 -0.048828125 3.056640625 1.123046875 q1.220703125 1.171875 1.220703125 3.1640625 q0 1.689453125 -1.083984375 2.75390625 q-0.78125 0.791015625 -1.767578125 1.03515625 z M170.7880865625 6.122999999999999 l2.8125 0 l0 14.072 l-2.8125 0 l0 -14.072 z M183.0732265625 6.122999999999999 l-5.4199 6.6504 l-3.5645 0 l5.4102 -6.6504 l3.5742 0 z M177.6338265625 13.5449 l5.4199 6.6504 l-3.5742 0 l-5.4102 -6.6504 l3.5645 0 z M203.650396875 11.7969 q1.123046875 0 1.953125 0.7421875 q0.8203125 0.693359375 0.99609375 1.97265625 l-2.9395 0 l-0.0097656 0 l-5.791 0 q-1.23046875 0 -2.08984375 -0.859375 t-0.85938 -2.0508 l0 -2.5684 q0 -1.19140625 0.849609375 -2.03125 q0.869140625 -0.869140625 2.099609375 -0.869140625 l8.0371 0 l0 2.7051 l-8.0371 0 q-0.0390625 0 -0.078125 0.0390625 q-0.05859375 0.05859375 -0.05859375 0.15625 l0 2.5684 q0 0.09765625 0.0390625 0.13671875 q0.05859375 0.05859375 0.09765625 0.05859375 l5.791 0 z M203.796896875 15.2832 l2.8027 0 l0 2.002 q0 1.19140625 -0.849609375 2.041015625 q-0.859375 0.869140625 -2.099609375 0.869140625 l-7.7637 0 l0 -2.7148 l7.7637 0 q0.048828125 0 0.087890625 -0.0390625 q0.05859375 -0.05859375 0.05859375 -0.15625 l0 -2.002 z"
        /></g
      ></svg
    >
  </div>

  {#each videoSources as source}
    {#if source == videoSources[currentSrc]}
      <video
        autoplay
        muted
        loop
        style="object-fit: cover; height: 100vh"
        class="w-screen opacity-80  border-gray-800"
      >
        <source src={source} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    {/if}
  {/each}

  <div class="p-6 py-16 grid grid-cols-12 gap-6 text-3xl font-light">
    <div class="col-span-12 md:col-span-6">
      <p class="flex items-center">
        Uplift. <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-7 ml-2 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg> Inspire.
      </p>
    </div>
    <div class="col-span-12 md:col-span-6">
      <p class="text-3xl font-extralight">
        A Web3 company investing in inspiring people and projects through
        supporting artists, causes, and events with blockchain technology.
      </p>
    </div>
  </div>
</div>
<div class="bg-black px-6 py-16 font-ibm font-light" style="height: 40vh;">
  <div class="grid grid-cols-12">
    <div class="col-span-6 text-2xl">
      <p>Have questions?</p>
      <p>
        <a href="mailto: connect@metawxrks.io" class="hover:underline"
          >Email us</a
        >
      </p>
    </div>
    <div class="col-span-6 font-light " />
  </div>
</div>
