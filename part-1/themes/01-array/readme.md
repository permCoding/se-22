# Тема 1 - Методы работы с массивами  

[MDN Web docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)  

```js  
split, join, reverse, concate, sort, 
map, filter, reduce, length, forEach,  
push, unshift, pop, shift, toString, 
slice, splice, indexOf, from, keys, values, 
delete arr[i]  
i in arr, includes, every, some  
table[row][col]  
```

---  

### Лабораторное занятие 1  

**Исследование функции сортировки массива вставками**  

***Задания:***  

> Разработать функцию сортировки массива вставками  
> Разместить её в модуле и вызывать из основной программы  
> Провести эксперимент - как растёт время сортировки при росте количества элементов n (1000, 2000, 4000, 8000, 16000, 32000, 64000, 128000, 256000)  
> В своём репозитории с помощью разметки markdown создать краткое описание вашей функции сортировки и сам код функции  
> В завершении описания добавить таблицу с данными роста времени исполнения с помощью специальной разметки markdown  
> Проанализировать: совпадают ли предполагаемые темпы роста с полученными  

---  

Пример размещения кода с форматированием:  

```js
function check(x) {
    if (x % 2 != 0) {
        return true
    }
    return false;
}
```