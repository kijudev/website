<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <div class="flex border-2 border-white w-fit">
        <NuxtLink
            v-for="itemLocale in locales"
            :key="itemLocale.code"
            :to="switchLocalePath(itemLocale)"
            :class="{
                'w-10 h-10 flex items-center justify-center': true,
                'bg-white text-black': itemLocale === locale,
            }"
        >
            {{ itemLocale.toUpperCase() }}
        </NuxtLink>
    </div>
</template>
