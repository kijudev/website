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

const breakpoints = useBreakpoints(breakpointsTailwind);
const smOrLarger = breakpoints.greaterOrEqual("md");

watch(smOrLarger, () => {
    isHamburgerOpen.value = false;
});
</script>

<template>
    <div
        class="sticky m-4 sm:m-6 p-4 sm:px-6 border-2 flex md:flex-row-reverse justify-between items-center gap-4"
    >
        <LocaleSwitch />
        <LinkList class="not-md:hidden" />
        <div class="not-lg:hidden text-blue-400 flex items-center">
            <UIcon
                name="solar:double-alt-arrow-right-bold"
                class="text-blue-400 text-lg md:text-xl -mx-1"
            />
            <span class="mx-1">{{ routeName }}</span>
            <UIcon
                name="solar:double-alt-arrow-left-bold"
                class="text-blue-400 text-lg md:text-xl -mx-1"
            />
        </div>
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
                class="float-right font-mono cursor-pointer text-4xl p-4"
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
