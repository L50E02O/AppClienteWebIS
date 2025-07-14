<script setup lang="ts">
import type { IMovie } from '../types/IMovie'

const props = defineProps<{
  pelicula: IMovie
}>()

const emit = defineEmits<{
  (e: 'verPelicula', id: number): void
}>()

function emitirVerPelicula(id: number) {
  // Emitimos el evento 'verPelicula' pasando el id de la película
  emit('verPelicula', id)
}
</script>

<template>
  <div class="pelicula">
    <img :src="pelicula.url" :alt="pelicula.titulo" class="pelicula-imagen" />
    <h2 class="pelicula-titulo">{{ pelicula.titulo }}</h2>
    <p class="pelicula-descripcion">{{ pelicula.description }}</p>
    <button class="ver-btn" @click="emitirVerPelicula(pelicula.id)">Ver Película</button>
  </div>
</template>

<style scoped>
.pelicula {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  max-width: 320px;
  background: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pelicula-imagen {
  width: 100%;
  max-width: 250px;
  border-radius: 6px;
  margin-bottom: 12px;
}

.pelicula-titulo {
  font-size: 1.5rem;
  margin: 8px 0;
  color: #333;
}

.pelicula-descripcion {
  font-size: 1rem;
  color: #666;
  margin-bottom: 16px;
  text-align: center;
}

.ver-btn {
  background-color: #1976d2;
  color: #fff;
  border: none;
  padding: 10px 18px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.ver-btn:hover {
  background-color: #125ea2;
}
</style>