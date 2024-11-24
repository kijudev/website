<template>
    <nav
        class="w-full p-2 sm:p-4 border-2 border-white flex justify-between items-center"
    >
        <ul>
            <li class="px-2">
                <NuxtLink to="/blog" class="font-mono underline text-xl"
                    >Blog</NuxtLink
                >
            </li>
        </ul>
        <div></div>
        <ul>
            <li>
                <LocaleSwitch />
            </li>
        </ul>
    </nav>
</template>
