<script setup lang="ts">
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
    <div
        class="flex border-2 border-white w-fit h-8 sm:h-10 text-xs sm:text-sm font-mono"
    >
        <NuxtLink
            v-for="itemLocale in locales"
            :key="itemLocale.code"
            :to="switchLocalePath(itemLocale)"
            :class="{
                'w-8 sm:w-10 flex items-center justify-center': true,
                'bg-white text-black': itemLocale === locale,
            }"
        >
            {{ itemLocale.toUpperCase() }}
        </NuxtLink>
    </div>
</template>
