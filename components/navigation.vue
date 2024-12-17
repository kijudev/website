<script setup lang="ts">
import { useBreakpoints, breakpointsTailwind } from "@vueuse/core";

const isHamburgerOpen = ref(false);
const route = useRoute();
const getRouteBaseName = useRouteBaseName();
const { t } = useI18n();

const routeNameTable = computed(() => ({
    index: t("links.home"),
    blog: t("links.blog"),
    portfolio: t("links.portfolio"),
    projects: t("links.projects"),
    aboutme: t("links.aboutMe"),
}));

const routeName = computed(() => {
    const pageName = getRouteBaseName(route);

    if (pageName.includes("blog")) {
        return t("links.blog");
    }

    // @ts-ignore
    const name = routeNameTable.value[pageName];

    return name ?? t("home");
});

const routePath = computed(() => {
    const pageName = getRouteBaseName(route);

    if (pageName === "blog-slug") {
        return "/blog";
    }

    return route.path;
});

const breakpoints = useBreakpoints(breakpointsTailwind);
const smOrLarger = breakpoints.greaterOrEqual("md");

watch(smOrLarger, () => {
    isHamburgerOpen.value = false;
});

const handleNavigation = () => {
    isHamburgerOpen.value = false;
};
</script>

<template>
    <nav
        class="p-4 md:px-8 border-b-2 border-l-2 flex md:flex-row-reverse justify-between items-center gap-4 w-full font-mono"
    >
        <LocaleSwitch />
        <LinkList class="not-md:hidden" />
        <NuxtLinkLocale :to="routePath" class="not-lg:hidden flex items-center">
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-lg md:text-xl -mx-1"
            />
            <span class="mx-1">{{ routeName }}</span>
            <UIcon
                name="solar:double-alt-arrow-left-bold"
                class="text-lg md:text-xl -mx-1"
            />
        </NuxtLinkLocale>
        <Hamburger class="md:hidden" v-model:open="isHamburgerOpen" />
    </nav>
    <UDrawer
        :open="isHamburgerOpen"
        :handle="false"
        direction="top"
        :ui="{ container: 'p-8', content: 'rounded-none border-b-2' }"
        should-scale-background
    >
        <template #title>
            <button
                class="float-right cursor-pointer text-2xl p-4"
                @click="isHamburgerOpen = false"
            >
                X
            </button>
        </template>
        <template #body>
            <LinkList @navigation="handleNavigation" />
        </template>
    </UDrawer>
</template>
