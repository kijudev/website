<template>
    <div
        class="p-4 sm:p-6 flex flex-col items-center sm:items-start gap-12 font-mono w-screen min-h-screen"
    >
        <Navigation />
        <slot />
        <Footer />
    </div>
</template>
