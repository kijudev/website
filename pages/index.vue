<template>
    <div
        class="w-screen h-screen flex items-center justify-center flex-col p-8 gap-8"
    >
        <Navigation />
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
