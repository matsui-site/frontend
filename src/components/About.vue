<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <div class="table-container">
        <table class="table">
            <thead>
                <tr>
                    <th >aaa</th>
                    <th >bbb</th>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td >ccc</td>
                    <td >ddd</td>
                </tr>
            </tbody>
        </table>
        </div>
        <button @click="push()">押す</button>
      </main>
    <Footer/>
  </div>
</template>

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