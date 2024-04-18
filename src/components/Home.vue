<template>
  <div class="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16 border p-6 space-y-6">
  <Bar :data="data" :options="options"/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = ref({
  responsive: true
});

const data = ref({
  labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Country',
      backgroundColor: ['#49A84C', '#F6BC00', '#4D86F9', '#F54900'],
      data: [40, 20, 12, 25, 35, 30, 20] // Your data points here
    }
  ]
});
</script>
