# Работа с SQLite базой данных  

Задания к лабораторной работе  
Все программы консольные  
редактор - DB Brower SQLite  
для VS Code - расширения:  
- SQLite Viewer  
- SQLite  

---  

**task01**  

с сайта  
https://n-katalog.ru/  

собрать данные про:  
SSD-накопители форм-фактора 2.5"  
получить первые **50 моделей** по популярности  
сохранить в формате json  
в файл **prods.json**  
поля объектов для сохранения:  
title  
href  
price_down  
price_up  

---  

**task02**  

из файла prods.json перенести данные в SQLite базу данных  
сначала программой на js создать базу данных и таблицу в ней  
в таблице должен быть столбец id с автоинкрементом  
потом добавить туда все записи  
сохранять только чистые данные - без лишних пробелов и символов  
цены сохранять в поле типа INTEGER  
название и гиперссылку в поле типа TEXT  

---  

**task03**  

из SQLite базы данных  
с помощью программы на js  
вывести на экран данные по моделям  
отсортировав их по убыванию объема  
внутри категории объёма по возрастанию минимальной цены (price_down)  
ограничив вывод на экран 20-ю моделями  

---  

Документация по парсингу:  
> https://cheerio.js.org/docs/intro  
> https://cheerio.js.org/docs/basics/selecting  

Во время парсинга с паджинацией между страницами сайта желательно делать небольшую паузу:  

```js
// возможный вариант функции для организации паузы

function delay(sek) {
    const date = Date.now();
    let cur = null;
    do { cur = Date.now(); } while (cur-date < sek * 1000);
}

delay(1.5) // в секундах

```

Заготовка:  
```js
base_url = https://n-katalog.ru/
cat = category/ssd-nakopiteli/list

let all_prods = []
let count = 10;
for (let page = 1; page <= count; page++) {
	params = `?page=${page}&sort=Popular&filterid=45ca8be2`
	let url = base_url + cat + params
	arr = get_prods_on_page(url)
	// добавить arr в all_prods
}
```