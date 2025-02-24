<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <h1>ホーム</h1>
        <p>ようこそ、私たちのホームページへ！</p>
        <button @click="push()">押す</button>
      </main>
    <Footer/>
  </div>
</template>

<style scoped>
</style>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router';

const router = useRouter();

function push(){
  router.push({
    name:"about"
  })
}
</script>