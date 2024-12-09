<script setup lang="ts">
const isHamburgerOpen = ref(false);
</script>

<template>
    <div
        class="sticky m-4 sm:m-6 p-4 sm:px-6 border-2 flex md:flex-row-reverse justify-between items-center gap-4"
    >
        <LocaleSwitch />
        <LinkList class="not-md:hidden" />
        <Hamburger class="md:hidden" v-model:open="isHamburgerOpen" />
    </div>
    <UDrawer
        :open="isHamburgerOpen"
        :handle="false"
        direction="top"
        :ui="{ container: 'p-8', content: 'rounded-none border-b-2' }"
        should-scale-background
    >
        <template #title>
            <button
                class="float-right font-mono cursor-pointer text-4xl m-4"
                @click="isHamburgerOpen = false"
            >
                X
            </button>
        </template>
        <template #body>
            <LinkList />
        </template>
    </UDrawer>
</template>
