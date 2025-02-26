<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <h1>退去費精算アプリとは🏡</h1>
        <p>通常賃貸は退去した後、次の入居者に向けてのクリーニングや軽めのリフォームを行う
          <br>その退去の際、退去者が住んでいた時に損傷させてしまったものや、汚してしまったものを
          <br>精算するのが退去費精算である。しかし悪徳な不動産会社の場合、通常よりも高い金額を
          <br>退去者に請求し、利益を上げようとする会社が存在する。そんな会社に騙されないように
          <br>事前にこのアプリを使って部屋の状態を確認し、予想される金額を把握しましょう！</p>
        <button class="button" @click="push()">早速計算してみる🖊️</button>
      </main>
    <Footer/>
  </div>
</template>

<style scoped>
</style>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRouter} from 'vue-router';

const router = useRouter();

function push(){
  router.push({
    name:"about"
  })
}
</script>