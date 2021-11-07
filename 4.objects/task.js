function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};

// ваш код для остальных методов
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    // добавить первую оценку
    this.marks = [mark];
  } else {
    // добавить вторую и последующие оценки в массив
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function (...marks) {
  console.log(marks);
  if (this.marks === undefined) {
    // добавить первую оценку
    this.marks = marks;
  } else {
    // добавить вторую и последующие оценки в массив
    this.marks = this.marks.concat(marks);
  }
};

Student.prototype.getAverage = function () { 
  if (this.marks === undefined) { 
    return 0
  } else {
    return this.marks.reduce((sum, x) => sum + x, 0) / this.marks.length
  }
}

Student.prototype.exclude = function (reason) { 
  delete this.subject
  delete this.marks
  this.excluded = reason
}
