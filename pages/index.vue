<template>
    <header class="font-mono text-center sm:text-start">
        <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl">
            {{ $t("pages.home.title") }}
        </h1>
        <h2 class="mt-1 sm:mt-2 font-bold md:text-lg text-blue-400">
            {{ $t("pages.home.heading") }}
        </h2>
    </header>
    <main
        class="mt-6 sm:mt-8 flex flex-col items-center sm:items-start w-full md:gap-2"
    >
        <p class="max-w-[600px]">
            {{ $t("pages.home.desciption") }}
        </p>
        <NuxtLinkLocale
            class="flex items-center transition-transform hover:translate-x-4 py-2"
            to="/aboutme"
        >
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-blue-400 text-lg md:text-2xl -m-1"
            />
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-blue-400 text-lg md:text-2xl -m-1"
            />
            <span class="md:text-lg font-bold text-blue-400 mx-2">{{
                $t("pages.home.moreAboutMe")
            }}</span>
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-blue-400 text-lg md:text-2xl -m-1"
            />
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-blue-400 text-lg md:text-2xl -m-1"
            />
        </NuxtLinkLocale>
    </main>
</template>
