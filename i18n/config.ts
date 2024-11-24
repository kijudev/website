import en from "./en";
import pl from "./pl";

export type Messages = typeof en;

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "en",
    messages: {
        en,
        pl,
    },
}));
