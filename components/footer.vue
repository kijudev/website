<script setup lang="ts">
const { copy } = useClipboard();
</script>

<template>
    <footer
        class="absolute bottom-0 m-4 sm:m-6 px-4 py-6 md:px-8 sm:py-4 border-2"
    >
        <ul class="flex gap-8 justify-center items-center flex-wrap">
            <li class="flex items-center">
                <span class="text-gray-400 mr-2">Email:</span>
                <button
                    class="cursor-pointer transition-colors hover:text-blue-400 select-all p-2"
                    @click="copy('me@kiju.page')"
                >
                    me@kiju.page
                </button>
                <button
                    class="cursor-pointer transition-colors hover:text-blue-400 select-all p-2"
                    @click="copy('dev@kiju.page')"
                >
                    dev@kiju.page
                </button>
            </li>
            <li class="hover:text-blue-400">
                <a
                    href="https://github.com/kijudev"
                    target="_blank"
                    class="flex items-center justify-center gap-1"
                >
                    <Icon
                        name="mdi:github"
                        class="text-2xl transition-colors"
                    />
                    <span class="transition-colors">Github</span>
                </a>
            </li>
            <li class="hover:text-blue-400">
                <a
                    href="https://www.instagram.com/kijukijuuu"
                    target="_blank"
                    class="flex items-center justify-center gap-1"
                >
                    <Icon
                        name="mdi:instagram"
                        class="text-2xl transition-colors"
                    />
                    <span class="transition-colors">Instagram</span>
                </a>
            </li>
        </ul>
    </footer>
</template>
