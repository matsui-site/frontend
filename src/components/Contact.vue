<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <h1>お問い合わせ</h1>
        <p>お問い合わせは、以下のフォームからお願いします。</p>
        <button @click="push()">押す</button>
      </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

function push(){
  router.push({
    name:"about"
  })
}
</script>