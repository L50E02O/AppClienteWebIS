<script setup lang="ts">
import type { IMovie } from '../types/IMovie'
import Pelicula from './Pelicula.vue'

const props = defineProps<{
  peliculas: IMovie[]
}>()

const emit = defineEmits<{
  (e: 'verPelicula', id: number): void
}>()

function verPelicula(id: number) {
  emit('verPelicula', id)
}
</script>

<template>
  <div class="cartelera">
    <Pelicula
      v-for="pelicula in peliculas"
      :key="pelicula.id"
      :pelicula="pelicula"
      @verPelicula="verPelicula"
    />
  </div>
</template>

<style scoped>
.cartelera {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
  margin-top: 32px;
}
</style>