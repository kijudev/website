<script setup lang="ts">
const posts = await queryCollection("blog").all();
</script>

<template>
    <NuxtLink v-for="post in posts" :to="post.path">{{ post.title }}</NuxtLink>
</template>
