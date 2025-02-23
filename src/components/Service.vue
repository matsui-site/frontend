<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <h1>サービス</h1>
        <p>私たちの提供するサービスはこちらです。</p>
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