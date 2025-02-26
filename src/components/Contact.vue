<template>
  <div class="layout-container">
    <Header/>
      <main class="main-content">
        <h1>精算項目別の料金表📝</h1>
        <p>以下精算項目別の料金表になります。当日ぼったくられない様に注意しましょう</p>
        <label>あなたの部屋の間取りは&nbsp;</label>
        <select id="dropdown" v-model="selected">
            <option value="">選択してください</option>
            <option v-for="option in options" :key="option.value" :value="option.value">
                {{ option.label }}
            </option>
        </select>
        <table border="1" style="margin-top: 10px; width: 100%;">
        <thead>
            <tr>
                <th>修繕項目</th>
                <th>料金</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in displayedTable" :key="row.id">
                <td>{{ row.repair }}</td>
                <td>{{ row.fee }}</td>
            </tr>
        </tbody>
        </table>
      </main>
    <Footer/>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { ref, computed } from 'vue';

const selected = ref('');
const options = ref([
  { value: 'table1', label: '1R・1K' },
  { value: 'table2', label: '1LDK' },
  { value: 'table3', label: '2DK・2LDK' },
  { value: 'table4', label: '3DK・3LDK' },
]);

// 各テーブルのデータ
const tableData = {
  table1: [
    { id: 1, repair: 'クリーニング', fee: 30000 },
    { id: 2, repair: 'クロス補修', fee: 4000 },
    { id: 3, repair: '床補修', fee: 22000 },
    { id: 4, repair: '床ワックス剥離洗浄', fee: 10000 },
    { id: 5, repair: 'キッチン追加洗浄費', fee: 5000 },
    { id: 6, repair: '浴室追加洗浄費', fee: 8000 },
    { id: 7, repair: '網戸張替', fee: 5000 },
    { id: 8, repair: '鍵交換費', fee: 15000 }
  ],
  table2: [
    { id: 1, repair: 'クリーニング', fee: 40000 },
    { id: 2, repair: 'クロス補修', fee: 4000 },
    { id: 3, repair: '床補修', fee: 22000 },
    { id: 4, repair: '床ワックス剥離洗浄', fee: 10000 },
    { id: 5, repair: 'キッチン追加洗浄費', fee: 5000 },
    { id: 6, repair: '浴室追加洗浄費', fee: 8000 },
    { id: 7, repair: '網戸張替', fee: 5000 },
    { id: 8, repair: '鍵交換費', fee: 15000 }
  ],
  table3: [
    { id: 1, repair: 'クリーニング', fee: 45000 },
    { id: 2, repair: 'クロス補修', fee: 4000 },
    { id: 3, repair: '床補修', fee: 22000 },
    { id: 4, repair: '床ワックス剥離洗浄', fee: 10000 },
    { id: 5, repair: 'キッチン追加洗浄費', fee: 5000 },
    { id: 6, repair: '浴室追加洗浄費', fee: 8000 },
    { id: 7, repair: '網戸張替', fee: 5000 },
    { id: 8, repair: '鍵交換費', fee: 15000 }
  ],
  table4: [
    { id: 1, repair: 'クリーニング', fee: 50000 },
    { id: 2, repair: 'クロス補修', fee: 4000 },
    { id: 3, repair: '床補修', fee: 22000 },
    { id: 4, repair: '床ワックス剥離洗浄', fee: 10000 },
    { id: 5, repair: 'キッチン追加洗浄費', fee: 5000 },
    { id: 6, repair: '浴室追加洗浄費', fee: 8000 },
    { id: 7, repair: '網戸張替', fee: 5000 },
    { id: 8, repair: '鍵交換費', fee: 15000 }
  ]
};

// 選択されたテーブルのデータを取得
const displayedTable = computed(() => tableData[selected.value]);
</script>