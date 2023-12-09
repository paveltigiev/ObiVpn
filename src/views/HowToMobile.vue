<template>
  <div>
    <div class="tabs">
      <div class="tabs_btn" @click="handleTabClick('Android')" :class="{ active_tab: selectedPlatform === 'Android' }">
        Android
      </div>
      <div class="tabs_btn" @click="handleTabClick('iOS')" :class="{ active_tab: selectedPlatform === 'iOS' }">
        iOS
      </div>
    </div>

    <div class="sub_title">Инструкция по настройке {{selectedPlatform}}</div>

    <div class="video_wrapper mobile">
      <div class='brove'><span class='speaker'></span></div>
      <video ref="videoElement" :src="getVideoSource()" class="video" controls type="video/mp4"></video>
    </div>

    <div class="main_btn" @click="downloadApp">Скачать приложение</div>

    <a href="https://t.me/CybernetixVPN_bot" class="footer_link" target="_blank">Ссылка на telegram-бота</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedPlatform = ref('Android')

const handleTabClick = (platform: string) => {
  selectedPlatform.value = platform
}
const downloadApp = () => {
  const downloadLink = selectedPlatform.value === 'iOS'
    ? 'https://itunes.apple.com/us/app/wireguard/id1441195209?ls=1&mt=8'
    : 'https://play.google.com/store/apps/details?id=com.wireguard.android'

  window.open(downloadLink, '_blank')
}
const getVideoSource = () => {
  return `./${selectedPlatform.value.toLowerCase()}.mp4`
}
</script>

<style lang="scss" scoped>

</style>