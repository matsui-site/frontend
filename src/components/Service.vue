<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <h1>退去費精算結果🗒️</h1>
        <h2>あなたの退去費の予想金額は:{{ store.totalPrice }}円＋クリーニング費</h2>
        <div class="table-container">
        <table border="1" class="table">
        <thead>
            <tr>
                <th>選択した項目</th>
                <th>修理内容と金額</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in store.selectedProducts" :key="product.id">
                <td>{{ product.phrase }}</td>
                <td>{{ product.repair }}</td>
            </tr>
        </tbody>
        </table>
        </div>
        <button class="button" @click="resetAndGoBack">もう一度計算する</button>
        <button class="button2" @click="push()">その他項目の目安金額はこちら</button>
      </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useProductStore } from '@/stores/counter';
import { useRouter } from 'vue-router';
const store = useProductStore();
const router = useRouter();

const resetAndGoBack = () => {
  store.resetCheck();  
  router.push('/about');    
};

function push(){
  router.push({
    name:"contact"
  })
}
</script>