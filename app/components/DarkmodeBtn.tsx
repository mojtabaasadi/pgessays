"use client"

export default function DarkModeButton(){
    return <button
    className="rounded-lg border border-neutral-300 px-3 py-1 text-sm dark:border-neutral-700"
    onClick={() => {
      const isDark = document.documentElement.classList.toggle("dark");
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }}
  >
    🌙 / ☀️
  </button>
}