<template>
    <div
        class="p-4 sm:p-6 flex flex-col items-center sm:items-start gap-6 sm:gap-8 md:gap-10 font-mono w-screen min-h-screen"
    >
        <Navigation />
        <slot />
        <Footer />
    </div>
</template>
