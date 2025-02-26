<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <h1>退去費計算🖊️</h1>
        <div class="table-container">
        <table border="1" class="table">
        <thead>
            <tr>
                <th>お部屋の状況</th>
                <th>チェック</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="product in store.products" :key="product.id">
                <td>{{ product.phrase }}</td>
                <td>
                    <input 
                    type="checkbox" 
                    :checked="product.checked"
                    @change="store.toggleCheck(product.id)"
                    />
                </td>
            </tr>
        </tbody>
        </table>
        </div>
        <button class="button" @click="push()">計算結果を確認</button>
      </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/counter';
const store = useProductStore();

const router = useRouter();

function push(){
  router.push({
    name:"service"
  })
}
</script>