<template>
    <ul
        class="font-mono underline text-2xl md:text-lg flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-10"
    >
        <li
            class="flex items-center gap-1 transition-transform not-md:p-2 cursor-pointer not-md:hover:translate-x-4 md:hover:-translate-y-1"
        >
            <NuxtLinkLocale to="/">{{ $t("links.home") }}</NuxtLinkLocale>
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-white text-4xl md:text-2xl md:hidden"
            />
        </li>
        <li
            class="flex items-center gap-1 transition-transform not-md:p-2 cursor-pointer not-md:hover:translate-x-4 md:hover:-translate-y-1"
        >
            <NuxtLinkLocale to="/blog">{{ $t("links.blog") }}</NuxtLinkLocale>
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-white text-4xl md:text-2xl md:hidden"
            />
        </li>
        <li
            class="flex items-center gap-1 transition-transform not-md:p-2 cursor-pointer not-md:hover:translate-x-4 md:hover:-translate-y-1"
        >
            <NuxtLinkLocale to="/aboutme">{{
                $t("links.aboutMe")
            }}</NuxtLinkLocale>
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-white text-4xl md:text-2xl md:hidden"
            />
        </li>
        <li
            class="flex items-center gap-1 transition-transform not-md:p-2 cursor-pointer not-md:hover:translate-x-4 md:hover:-translate-y-1"
        >
            <NuxtLinkLocale to="/portfolio">{{
                $t("links.portfolio")
            }}</NuxtLinkLocale>
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-white text-4xl md:text-2xl md:hidden"
            />
        </li>
        <li
            class="flex items-center gap-1 transition-transform not-md:p-2 cursor-pointer not-md:hover:translate-x-4 md:hover:-translate-y-1"
        >
            <NuxtLinkLocale to="/projects">{{
                $t("links.projects")
            }}</NuxtLinkLocale>
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-white text-4xl md:text-2xl md:hidden"
            />
        </li>
    </ul>
</template>
