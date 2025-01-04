<template>
  <!-- {{ racingBoardStore.raceRounds }} -->
    <div class="flex flex-col items-center p-4 space-y-6">
      <!-- Yarış Wrapper -->
      <div class="relative w-full max-w-4xl border border-gray-300 rounded-lg overflow-hidden">
        <!-- Bitiş Çizgisi -->
        <div
          ref="finishLine"
          class="absolute top-0 bottom-0 right-0 w-[2px] bg-red-500"
        ></div>
  
        <!-- Her bir atın satırı -->
        <div
          v-for="(horse, index) in horses"
          :key="horse.id"
          class="flex items-center border-b last:border-0"
        >
          <!-- Kulvar Numarası -->
          <div class="w-16 h-12 flex items-center justify-center bg-gray-100 text-gray-800 font-bold border-r">
            {{ index + 1 }}
          </div>
  
          <!-- Atın Koşu Alanı -->
          <div class="relative flex-1 h-12">
            <div
              :style="{ transform: `translateX(${horse.position}px)` }"
              class="absolute top-0 left-0 h-10 w-10 bg-blue-500 text-white flex items-center justify-center rounded-full shadow-md transition-transform duration-200"
            >
              🐎
            </div>
          </div>
        </div>
      </div>
  
      <!-- Kontrol Butonları -->
      <div class="flex space-x-4">
        <button
          @click="startRace"
          :disabled="isRaceInProgress"
          class="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 disabled:opacity-50"
        >
          Yarışı Başlat
        </button>
        <button
          @click="resetRace"
          :disabled="isRaceInProgress"
          class="bg-gray-500 text-white font-semibold py-2 px-4 rounded hover:bg-gray-600 disabled:opacity-50"
        >
          Sıfırla
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed, onMounted, nextTick } from "vue";
  import { useRacingBoardStore } from '@/stores/racingBoard';

  const racingBoardStore = useRacingBoardStore();
  
  interface Horse {
    id: number;
    position: number; // Atın pozisyonunu piksel olarak temsil eder
  }
  
  const horses = ref<Horse[]>([]);
  const isRaceInProgress = ref(false);
  const finishLinePosition = ref(0);
  
  // Yarışın bitip bitmediğini kontrol eden bir computed property
  const isRaceFinished = computed(() =>
    horses.value.every((horse) => horse.position >= finishLinePosition.value)
  );
  
  // Yarışı başlat
  const startRace = () => {
    if (isRaceInProgress.value) return;
  
    isRaceInProgress.value = true;
  
    const interval = setInterval(() => {
      horses.value = horses.value.map((horse) => ({
        ...horse,
        position: Math.min(horse.position + Math.random() * 50, finishLinePosition.value), // Hız artırıldı
      }));
  
      // Tüm atlar bitiş çizgisine ulaşmadan yarış bitmeyecek
      if (isRaceFinished.value) {
        clearInterval(interval);
        isRaceInProgress.value = false; // Yarış bittiğinde kontrol
        alert("Yarış Bitti! 🎉"); // İsteğe bağlı: Yarışın bittiğini bildir
      }
    }, 100); // Daha hızlı güncelleme için süre 100ms'ye indirildi

};

// Yarışı sıfırla
const resetRace = () => {
      console.log('horses.value ', horses.value);
    horses.value = horses.value.map((horse) => ({
      ...horse,
      position: 0,
    }));
    isRaceInProgress.value = false;
  };
  
  // Bitiş çizgisinin konumunu hesapla
  const finishLine = ref<HTMLElement | null>(null);
  const calculateFinishLinePosition = () => {
    if (finishLine.value) {
    const wrapper = finishLine.value.offsetParent as HTMLElement;
    if (wrapper) {
      const wrapperWidth = wrapper.clientWidth; // Wrapper genişliği
      finishLinePosition.value = wrapperWidth; // Bitiş çizgisi pozisyonu, sağ kenar
    }
  }
    console.log('finishLinePosition.value ', finishLinePosition.value);
  };
  
  // İlk yükleme sırasında atları oluştur ve bitiş çizgisini hesapla
  onMounted(() => {
    horses.value = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      position: 0,
    }));
    nextTick(() => {
      calculateFinishLinePosition();
    });

    racingBoardStore.setInitialData();
  });
  
  window.addEventListener("resize", calculateFinishLinePosition); // Responsive hesaplama
  </script>
  
  <style scoped>
  /* Responsive ve görsel uyumluluk için temel düzenlemeler */
  </style>