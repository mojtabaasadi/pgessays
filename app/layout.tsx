import DarkModeButton from "./components/DarkmodeBtn.tsx";
import ThemeProvider from "./components/ThemeProvider.tsx";
import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "مقالات پال گرام (به فارسی)",
  description:"ترجمه مفالات پال گرام به فارسی",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning className={vazirmatn.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'light';
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body className={`${vazirmatn.variable} font-sans bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors`}>
        <div className="min-h-screen">
          <ThemeProvider />
          <div className="mx-auto max-w-3xl px-4 py-8 ">
            <header className="mb-12 flex items-center justify-between">
              <h1 className="text-xl font-semibold tracking-tight">
                پال گرام
              </h1>

              <DarkModeButton />
            </header>

            <main className="prose prose-neutral dark:prose-invert prose-p:leading-loose max-w-none">
              {children}
            </main>

            <footer className="mt-16 text-center text-sm text-neutral-500 dark:text-neutral-400 flex items-center justify-center">
              © {new Date().getFullYear()} — ساخته‌شده با عشق
              <span className="mx-2">|</span>
              <a href="https://github.com/mojtabaasadi/pgessays" target="_blank" >
                <img width={20} height={20} className="logo-light" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2ZW4hNYRTHf2PGjMuMaHKpk4QHGqQQyqSQZw9TCilqchu5xDyMSykvDGrwwDxTysMU8iYSuTZNLomYJmXcPSiXidj6ap3a7c453/r2/vaZKftX6+XMPv/1/87e+1trfQMZGRm+mAasAY4B14DnwHvgC9ALPADOAXuAuUAFQ4A6oBm4AwSO8Ro4BOQGw/hw+SW/xjAejZ9AB1BfLvPLgGcejEfjA9CUtvlNwO8UzAeh6JQ77JUq4EzKxoNQXAaqfS7gbBnNBxKXgEof5vcOgvlA4nhS8yuBP0XEDwDjgY1ATwxzpk7sBKYAM0tctyqu+RHAyxLCJmmeYcBm2RJtxgeAFnmvwhS7vh8YSwwOWowUeskWyZ1ZKgVqpEROPjN/W1wkX1Ai2l3NjwO+x1hAXKotuYyXiS6COxSPwgSPC5ikyLfPRfCRQnCFxwUsV+R7pW0AGxRiHz03YTnRtOWdrRHboBBajX+aFHl3a4ROW0R6UurlK4D7ltznNUK3fPwKMdluyd2tEXns4zmMSYMl9zuNyAuLiJnC0qJOUQ+s9A3hBQz4eIRmpbiAOZbcpi+y0mURMbNwWrRacpsCa+WoRaRPGjTfjJKTilK5r2iE1isKihkvfdOpyNumEapXDu4dBXr6OFQBJxX5TDRqRa8rBU3lXJLAfCPwUJnrM1CjFd6iFM3HXWArMF2hba7ZBtxzzHHCdZx8ExFYBywEnibcododjQfAX2AGjrQUEForre/bIscgGioVtSaIxAViUCMnB2GhXukazXP/K8GA0+xg/hswmZjMk/IdFpwfOiN9AvwAbss+rmWqwwJaSciuiODFpIJy9qkx3+Vj9jACpyLC5kAqKTbz5j2pxRMVUriiW+d+GUIOe15At5z6eaetwMubD1eKmb8BjCFFFhQZelyJft+0L0fS+N9AIWrlbnwKJXfFFKe8+Zuy45Wd0TLkm53KFdPAXZXtOCMj43/lH/wRwzngjJpgAAAAAElFTkSuQmCC"></img>
                <img width={20} height={20} className="logo-dark"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6UlEQVR4nO2aSWgUQRSGO4pb3DCKCyoILsGToLiAF5eDHlzxICoEJW4HowcRBBEUvKho4kEQz54VBXdxCbjGDRFF3MCDazLBNXHLJw9rcGxmqqt7XveM2B/MZbqm/v9Vv6l+XVWel5KSkpKSkpISI8BgYCmwDzgNPAYywDfzyZjvTps2S+Q33r8M0B9YDzQRnRtAnfTl/SsAw4AG4DN6fALqgaFeuQJ0ATYAH4kPGdRtQDevnACqgbskxx1gjFcOAItivuuF+AAsLHXwy4HvlI4fwNpSBb+G8qGuFGn/g/JBvCxIcsL7aHlctcUYaJvRKDQnjI47+K4Bs/1E024CsAt4qxD0G2AnMN70PdnS9rY8juMcgM0WcQm2wte+F7AV+JLT7iVwBTgOHDKf4+Y7uZZFfrMF6OnrswJosfjYFFfwQy3pJzRafjsKmO9SyRkdaTvS0uayxYf8PYcUE2teTHlr44SXEOalycaeOF5sPgeIXlAVtfu5GODlk+oLFL/fyFwmq7/mgDgwc4DL5LpOU7TJQfCVTHpqooW99AZeO/i5riU4BOgIEJPr01UE3TzNcPQ0UENsqcNoH1GJLJyvYw6+FmsI7XMQSuzu5/ia6eCrPolHzvtYqy97VSrlr42TGkJPA0RuqkQUzZuUvjYea4i0lEsBFCE7mzVEvgaInFeJJpq3xgBv7Roi3wNE7qlEE83bwwBv3zRE3geIvFKJJpq3dwHeWjVEnhDMcJWIwvka4eDrkYbQWQehWpWo9Nckz2gI1TsInVKJSv/G7NUQWoYb01Qi06sChSVaO7sdDmL3gD4qEdr99AXuO/j5CQzSEr3uOOIXgB4qovl9VAKXHL1c0xReiTsPgElq4n88THF47ueyQnvkW3wCh0UEOJhnL0DS7ygwu5idXMkmYI6U26ZPV5rVMxHY7RO5lV3lBcYBzwuYkbXEc+ZpMt7xTu83qd5ONHaqBp8zGbbmWQecYK6PDVg4lbfKSi8As5fwguhk1CY/P7ITm0dQzPYz12s1NjCBjUUMwBovLoBOwNU8ojt8K8j+TGgLc6DB/KWiILtLnWIbgJzNUUmzXD5ks8C0GSDrccBqYJ6s5HohAKoiBC+TdLWXBMD0POsEB5SXu8LwNclKNPd0iJ89GgeYpI8QwUuVWlOsZjGD4M+EZ8B2YK7Zyp4FrAI6h+i3e4g7X5rgswBTHRYmCJMZpgAKIpN42gdMjDID26gMWXnauFI2x+R8m5Y1lmz466CDDWlboI9Wcxgz3kddMUgVZo60NBeRAT3ybHc3xFbhxYEJotbs5Yc+sGDeHRrNgeuqWEympKSkpKSkpHj/Mb8AfSQqaZFjt2MAAAAASUVORK5CYII=" alt="" />
              </a>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
