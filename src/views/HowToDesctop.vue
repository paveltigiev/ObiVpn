<template>
  <div>
    <div class="tabs">
      <div class="tabs_btn" @click="handleTabClick('Windows')" :class="{ active_tab: selectedPlatform === 'Windows' }">
        Windows
      </div>
      <div class="tabs_btn" @click="handleTabClick('MacOS')" :class="{ active_tab: selectedPlatform === 'MacOS' }">
        MacOS
      </div>
    </div>

    <div class="sub_title">Инструкция по настройке {{selectedPlatform}}</div>

    <div class="video_wrapper desctop">
      <video ref="videoElement" :src="getVideoSource()" class="video" controls type="video/mp4"></video>
    </div>

    <div class="main_btn" @click="downloadApp">Скачать приложение</div>

    <a href="https://t.me/CybernetixVPN_bot" class="footer_link" target="_blank">Ссылка на telegram-бота</a>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const selectedPlatform = ref('Windows')

const handleTabClick = (platform: string) => {
  selectedPlatform.value = platform
}
const downloadApp = () => {
  const downloadLink = selectedPlatform.value === 'Windows'
    ? 'https://download.wireguard.com/windows-client/wireguard-installer.exe'
    : 'https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&mt=12'

  window.open(downloadLink, '_blank')
}
const getVideoSource = () => {
  return `./${selectedPlatform.value.toLowerCase()}.mp4`
}
</script>

<style lang="scss" scoped>

</style>