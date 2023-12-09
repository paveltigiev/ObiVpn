<template>
  <div>
    <p class="about">Мы небольшая команда специалистов в области безопасности данных, предоставляющая всем желающим использовать интернет без ограничений.</p>

    <h3 class="features_title">Что ты получишь используя DragonVPN:</h3>
    <ul class="features">
      <li>🔓 Доступ к любым сайтам и приложениям</li>
      <li>🧙🏻‍♂️ Шифрование всех сетевых данных</li>
      <li>📍 Скрытие твоего местоположения</li>
      <li>👌 Минимальную стоимость подписки</li>
      <li>😌 Простую настройку</li>
      <li>🚀 Высокую скорость</li>
    </ul>

    <div class="howto_links">
      <router-link to="/howto_mobile" class="link">Инструкция для телефона</router-link>
      <router-link to="/howto_desctop" class="link">Инструкция для компьютера</router-link>
    </div>

    <a href="https://t.me/CybernetixVPN_bot" class="main_btn">Телеграм бот</a>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.about {
  font-size: 16px;
  line-height: 1.4em;
  margin-bottom: 32px;
  font-weight: 200;
}
.features_title {
  font-size: 18px;
  font-weight: 400px;
  margin: 0 0 8px;
}
.features {
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  li {
    padding: 0;
    margin: 0;
  }
}
.howto_links {
  margin-bottom: 32px;

  .link {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
    color: #fff;
  }
}
.main_btn {
  display: block;
  text-decoration: none;
}
</style>
