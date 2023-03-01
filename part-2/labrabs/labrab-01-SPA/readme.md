### SPA  

---  
Контрольная работа 1  
Написать консольное приложение, которое из файла csv делает файл json.  

---  

*Одностраничное web-приложение*  

1) сделать стиль для первой колонки отличный от стилей всех остальны колонок, назначив для него класс в файле *.css  
2) доделать задание по количеству выводимых данных - в коде написано  
3) доделать задания про сортировки по параметрам и направления - в коде написаны  
4) доделать контроллеры  

---  

Не забывайте установить необходимые зависимости - движок страниц и фреймворк:  
```txt
npm i hbs express
или просто
npm i
при наличии файла package.json
```

Структура папок и распределение файлов приложения согласно паттерна MVC:  

```txt
.\controllers
.\controllers\contr_index.js

.\models
.\models\abiturs.js

.\private
.\private\abiturs.csv
.\private\abiturs.json

.\public
.\public\images
.\public\images\favicon.ico
.\public\stylesheets
.\public\stylesheets\style.css

.\routes
.\routes\index.js
.\routes\sorted.js

.\views
.\views\index.hbs

.\app.js
.\package.json
```
