export function personUpdate(data) {
  if (data.gender === 'female') {
    delete data.age;
  } else if (data.gender === 'male') {
    if (data.income === undefined) {
      data.income = 100000;
    }
  }
  return data;
}

export function objectFieldsList(obj1, obj2, obj3) {
  const allKeys = [
    ...Object.keys(obj1),
    ...Object.keys(obj2),
    ...Object.keys(obj3)
  ];
  
  return [...new Set(allKeys)].sort();
}

export function objectClone(obj, count) {
  const clones = [];
  
  for (let i = 0; i < count; i++) {
    // Глубокое клонирование для корректной работы с вложенными объектами
    const clone = JSON.parse(JSON.stringify(obj));
    
    // Тесты ожидают, что нумерация начинается с 0 (индекс массива)
    clone.id = i;
    
    clones.push(clone);
  }
  
  return clones;
}
