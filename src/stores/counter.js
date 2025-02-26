import { ref, computed } from 'vue'
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, checked: false, price: 4000, phrase: "入居後につけた壁紙の傷がある", repair: "クロス補修費で4000円"},
      { id: 2, checked: false, price: 22000, phrase: "入居後につけた床の傷がある", repair: "床補修費で22000円"},
      { id: 3, checked: false, price: 10000, phrase: "床が不規則に黒ずんでしまっている", repair: "床ワックス剥離洗浄費で10000円"},
      { id: 4, checked: false, price: 5000, phrase: "キッチンの換気扇に油汚れが溜まっている" , repair: "キッチン追加洗浄費で5000円" },
      { id: 5, checked: false, price: 8000, phrase: "浴室にカビが生えてしまっている", repair: "浴室追加洗浄費で8000円"},
      { id: 6, checked: false, price: 5000, phrase: "窓の網戸が破れてしまっている", repair: "網戸張替費で5000円"},
      { id: 7, checked: false, price: 15000, phrase: "スペアキーを紛失してしまっている", repair: "鍵交換費で15000円" }
    ]
  }),
  actions: {
    toggleCheck(id) {
      const product = this.products.find(p => p.id === id);
      if (product) {
        product.checked = !product.checked;
      }
    },
    resetCheck() {
      this.products.forEach(product => {
        product.checked = false;
      });
    }
  },
  getters: {
    selectedProducts: (state) => state.products.filter(p => p.checked),
    totalPrice: (state) => state.products
      .filter(p => p.checked)
      .reduce((sum, p) => sum + p.price, 0)
  }
});
