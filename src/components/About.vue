<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <h1>会社概要</h1>
        <p>私たちは、最高のサービスを提供する企業です。</p>
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