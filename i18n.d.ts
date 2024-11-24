import type { Messages } from "./i18n/config";

type StringKey<T> = Extract<keyof T, string>;
type GenerateKeyPaths<T, Prefix extends string = ""> = T extends object
    ? {
          [K in StringKey<T>]: T[K] extends object
              ? GenerateKeyPaths<T[K], `${Prefix}${K}.`>
              : `${Prefix}${K}`;
      }[StringKey<T>]
    : Prefix;

declare module "vue" {
    interface ComponentCustomProperties {
        $t(key: GenerateKeyPaths<Messages>): string;
    }
}
