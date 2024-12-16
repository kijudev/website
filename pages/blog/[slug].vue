<script lang="ts" setup>
const route = useRoute();
const { data, error } = await useAsyncData(route.path, () =>
    queryCollection("blog").path(route.path).first()
);
</script>

<template>
    <!-- <pre v-if="error">{{ error }}</pre>
    <ContentRenderer v-if="data" :value="data" class="MARKDOWN">
    </ContentRenderer> -->

    {{ $t("underConstruction") }}
</template>
