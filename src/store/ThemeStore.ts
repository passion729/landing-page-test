import { create } from "zustand/react";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

interface ThemeStore {
    theme: Theme;
    toggleTheme: () => void;
}

const useThemeStore = create<ThemeStore>()(
    persist((set, get) => ({
            theme: typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
            toggleTheme: () => {
                const newTheme: Theme = get().theme === "light" ? "dark" : "light";
                if (typeof document !== "undefined") {
                    document.documentElement.classList.toggle(
                        "dark",
                        newTheme === "dark"
                    );
                }
                set({ theme: newTheme });
            },
        }),
        {
            name: "theme",
            onRehydrateStorage: () => (state) => {
                if (state?.theme === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
        })
);

export default useThemeStore;