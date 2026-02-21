# Start Development With Us

Добро пожаловать в ваш первый проект на Vite! Этот сайт создан с использованием **HTML**, **SCSS** и **JavaScript**, собранных через **Vite**. Ниже представлен подробный гайд для пользователей, которые хотят клонировать проект с GitHub и запустить его локально.

## 📂 Структура проекта

```
project-root/
├── src/
│   ├── index.html
│   ├── main.js
│   ├── styles/
│   │   └── main.scss
│   └── icons/
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Установка и запуск

### 1. Клонирование репозитория

```
git clone https://github.com/username/start-development-with-us.git
cd start-development-with-us
```

### 2. Установка зависимостей

Убедитесь, что у вас установлен **Node.js (>=16)** и **npm**.

```
npm install
```

### 3. Запуск в режиме разработки

```
npm run dev
```

После этого откройте http://localhost:5173 в браузере.

### 4. Сборка проекта

```
npm run build
```

Собранные файлы будут находиться в папке `dist/`.

### 5. Превью собранного проекта

```
npm run preview
```

## ⚙️ Конфигурация Vite

Пример `vite.config.js`:

```
import { defineConfig } from "vite";
import viteImagemin from "vite-plugin-imagemin";
import svgSpritemapPlugin from "@spiriit/vite-plugin-svg-spritemap";

export default defineConfig({
  base: "./", // относительные пути
  plugins: [
    svgSpritemapPlugin("src/icons/**/*.svg", {
      output: { filename: "sprites.svg", svgo: true },
    }),
    viteImagemin({
      gifsicle: { optimizationLevel: 3, interlaced: false },
      optipng: { optimizationLevel: 5 },
      mozjpeg: { quality: 75 },
      svgo: {
        plugins: [
          { name: "removeViewBox" },
          { name: "removeEmptyAttrs", active: false },
        ],
      },
    }),
  ],
});
```

## 🎨 SCSS пример

Файл `src/styles/main.scss`:

```
$primary-color: #3498db;

body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
  color: #333;
}

h1 {
  color: $primary-color;
  text-align: center;
}
```

## 📜 HTML пример

Файл `src/index.html`:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Start Development With Us</title>
</head>
<body>
  <h1>Start Development With Us</h1>
  <script type="module" src="/main.js"></script>
</body>
</html>
```

## 📜 JS пример

Файл `src/main.js`:

```
import "./styles/main.scss";

console.log("Welcome to Start Development With Us!");
```

## 🛠️ Советы по использованию

- Используйте `base: './'` для корректных относительных путей при деплое.
- Для оптимизации картинок применяются плагины `vite-plugin-imagemin` и `vite-plugin-svg-spritemap`.
- SCSS позволяет легко управлять стилями и переменными.

## ✅ Итог

Теперь любой пользователь может:

1. Клонировать проект с GitHub.
2. Установить зависимости.
3. Запустить локально.
4. Собрать и деплоить.

Проект готов к использованию и дальнейшему развитию!