<template>
  <h2>{{name}}</h2>
  <svg width="504" height="78" viewBox="0 0 704 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_239:2)">
      <path d="M4 0H700L670.5 35.7609L700 70H4V0Z" fill="#F70100"/>
    </g>
    <defs>
      <filter id="filter0_d_239:2" x="0" y="0" width="704" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_239:2"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_239:2" result="shape"/>
      </filter>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "BannerFlag",
  props: {
    name: {type: String, required: true}
  }
}
</script>

<style scoped>
h2 {
  position: absolute;
  color: white;
  margin-left: 7em;
  margin-top: .75em;
  text-shadow: 4px 2px 4px #262626;
}
</style>