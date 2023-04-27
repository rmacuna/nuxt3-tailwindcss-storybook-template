<script setup>
  const titlePage = ref('Hello world');
</script>


<template>
  <div class="h-screen">
    <h1 class="text-white flex justify-center items-center text-7xl">Heading page</h1>

    <h1>{{ titlePage }}</h1>

    <div>
      {{ $route.path }}
    </div>
  </div>
</template>

