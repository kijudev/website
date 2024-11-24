<template>
    <div
        class="w-screen h-screen flex items-center justify-center flex-col p-8 gap-8"
    >
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
        <div class="w-full h-full border-2 border-white flex flex-col p-8">
            <header class="flex flex-col items-center sm:items-start">
                <h1
                    class="font-mono text-2xl md:text-4xl lg:text-6xl font-light"
                >
                    JAKUB - KIJU - KIJEK
                </h1>
                <h2>{{ $t("underConstruction") }}</h2>
            </header>
        </div>
    </div>
</template>
