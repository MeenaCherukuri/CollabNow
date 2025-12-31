import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("collabnow-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("collabnow-theme", theme);
    set({ theme });
  },
}));