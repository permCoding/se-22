## cheerio  

**cheerio - привет**  

### DOCS  
https://cheerio.js.org/docs/intro  
https://cheerio.js.org/docs/basics/selecting  
https://cheerio.js.org/docs/basics/traversing  
https://cheerio.js.org/docs/basics/manipulation  
https://russianblogs.com/article/3349437160/  

---  

Простой пример для парсинга:  
https://pcoding.ru/parsing/01/page.html  
Он же тут в папке: ./html  

---  

Методы cheerio:  

- .find() - найти все теги  
- .attr() - получить значение атрибута  
- .children() - дочерний  
- .toArray() - в массив  
- .html() - вернуть html tag  
- .text() - вернуть inner text  
- .prev() - предыдущий  
- .prev() - предыдущий  
- .filter() - фильтровать по условию  
- .not() - фильтровать обратно условию  
- .prev('div')  

- $('[id=prodname]') - искать по атрибуту  
- $('#all__prices') - искать по id  
- $('.all__price') - искать по классу  
- .find('span:eq(1)') - искать по тегу и индексу  
- $('li:first').nextAll() - найти тег и взять все последующие  
- $('li:last').prevAll()  
- $('li:eq(1)').siblings()  
- .find('div[id=all__prices]')  
- $('.title', '.prod__price') - искать в контексте  
- $('.title', '.prod__price', tag_info) - искать в контексте в контексте  

---
