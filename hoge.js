const students = [
  { name: 'Ichiro', age: 20 },
  { name: 'Jiro', age: 19 },
  { name: 'Saburo', age: 18 },
  { name: 'Nana', age: 19}
];

for(const student of students){
  if(student.name == 'Jiro'){
    document.write(student.age);
  }
}