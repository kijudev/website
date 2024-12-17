<script setup lang="ts">
const isOpen = defineModel<boolean>("open", { default: false });

function handleClick() {
    isOpen.value = !isOpen.value;
}
</script>

<template>
    <button
        class="overflow-hidden outline-none border-none flex flex-col justify-between w-10 h-8 cursor-pointer p-1"
        @click="handleClick"
    >
        <span
            :class="{
                'w-full h-0.5 bg-white transition-transform': true,
                'translate-x-0': isOpen,
            }"
        ></span>
        <span
            :class="{
                'w-full h-0.5 bg-white transition-transform': true,
                'translate-x-3': isOpen,
            }"
        ></span>
        <span
            :class="{
                'w-full h-0.5 bg-white transition-transform': true,
                'translate-x-6': isOpen,
            }"
        ></span>
    </button>
</template>
