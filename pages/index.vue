<template>
    <div
        class="sticky top-0 left-0 w-[40dvw] h-screen p-16 bg-black flex flex-col gap-16"
    >
        <header>
            <h1 class="font-thin text-4xl text-blue-100 font-mono">
                JAKUB - KIJU - KIJEK
            </h1>
        </header>
        <nav>
            <ol class="flex flex-col gap-4">
                <li
                    class="text-2xl font-mono cursor-pointer text-blue-100 w-fit hover:translate-x-4 hover:text-blue-400 transition-all"
                >
                    about me
                </li>
                <li
                    class="text-2xl font-mono cursor-pointer text-blue-100 w-fit hover:translate-x-4 hover:text-blue-400 transition-all"
                >
                    tech stack
                </li>
            </ol>
        </nav>
    </div>
    <div
        class="absolute top-0 right-0 w-[60dvw] min-h-screen flex flex-col bg-blue-700"
    >
        <div class="flex w-full h-screen items-center justify-center">
            <h1 class="font-black text-4xl font-sans">
                {{ $t("underConstruction") }}
            </h1>
        </div>
    </div>
    <footer class="h-32 w-full bg-black"></footer>
</template>
