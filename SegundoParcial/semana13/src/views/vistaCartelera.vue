<script setup lang="ts">
import { ref } from 'vue'
import type { IMovie } from '../types/IMovie'
import Cartelera from '../components/Cartelera.vue'

// Lista de películas de ejemplo
const peliculas = ref<IMovie[]>([
  {
    id: 1,
    titulo: 'El Origen',
    description: 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos.',
    url: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
  },
  {
    id: 2,
    titulo: 'Matrix',
    description: 'Un hacker descubre la verdadera naturaleza de su realidad y su papel en la guerra contra sus controladores.',
    url: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
  },
  {
    id: 3,
    titulo: 'Interstellar',
    description: 'Un equipo de exploradores viaja a través de un agujero de gusano en el espacio en un intento de asegurar la supervivencia de la humanidad.',
    url: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
  },
  {
    id: 4,
    titulo: 'Inception',
    description: 'Un ladrón que roba secretos corporativos a través del uso de la tecnología de sueños compartidos.',
    url: 'https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg'
  }
])

function verPelicula(id: number) {
  alert(`¡Vas a ver la película con id: ${id}!`)
}
</script>

<template>
  <div class="vista-cartelera">
    <h1>Cartelera de Películas</h1>
    <Cartelera :peliculas="peliculas" @verPelicula="verPelicula" />
  </div>
</template>

<style scoped>
.vista-cartelera {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 30px;
  font-size: 2.5rem;
}
</style>
