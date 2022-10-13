let methods = {
    'increment': function () { this.value++; },
    'display' : function () { console.log(this.value); }
};
  
function addMethods(object, methods) {
    for (var name in methods) {
      object[name] = methods[name];
    }
};
  
const obj = { value: 3 };
// obj = {}; // так нельзя - объявлен как const

addMethods(obj, methods);
obj.display();  // "3"
obj.increment();
obj.display();  // "4"
