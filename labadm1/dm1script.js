let error = "";
function Validation(mass) {
  let arr = false;
  if (mass.length > 0) {
    arr = mass.split(" ");
    arr = Array.from(new Set(arr));
    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i][0] < "A" || arr[i][0] > "z")) {
        error = "Ошибка при вводе  множества : " + mass + "В элементе" + arr[i];
        arr = false;
        break;
      }
      if (arr[i][1] % 2 != 0) {
        error = "Ошибка при вводе множества : " + mass + "В элементе " + arr[i];
        arr = false;
        break;
      }
      if (arr[i][2] < "A" || arr[i][2] > "z") {
        error = "Ошибка при вводе множества: " + mass + "В элементе " + arr[i];
        arr = false;
        break;
      }
      if (arr[i][3] < "A" || arr[i][3] > "z") {
        error = "Ошибка при вводе множества : " + mass + "В элементе " + arr[i];
        arr = false;
        break;
      }
    }
  } else {
    arr = true;
  }
  return arr;
}
function Union(a1, a2) {
  let result = Array.from(new Set(arr1.concat(arr2)));
  return result;
}
function Intersection(a1, a2) {
  let result = " ";
  for (let i = 0; i < a2.length; i++) {
    if (a1.indexOf(a2[i]) != -1) {
      result += a2[i] + " ";
    }
  }

  return result;
}
function Addition(a1, a2) {
  let result = " ";

  for (let i = 0; i < a2.length; i++) {
    if (a2.indexOf(a1[i]) == -1) {
      result += a1[i] + " ";
    }
  }
  return result;
}
function simmetr_razn(a1, a2) {
  let result = " ";
  for (let i = 0; i < a2.length; i++) {
    if (a2.indexOf(a1[i]) == -1) {
      result += a1[i] + " ";
    }
  }
  for (let i = 0; i < a1.length; i++) {
    if (a1.indexOf(a2[i]) == -1) {
      result += " " + a2[i];
    }
  }
  return result;
}
function Result() {
  let result = " ";
  var a = document.getElementById("arr1");
  var b = document.getElementById("arr2");

  if (
    (arr1 = Validation(a.value)) == false ||
    (arr2 = Validation(b.value)) == false
  ) {
    alert(error);
  }

  result = "Объединение множества А и В: " + Union(arr1, arr2) + "<br>";

  result += "Пересечение ножества А и В: " + Intersection(arr1, arr2) + "<br>";
  result += "Дополнение А / В: " + Addition(arr1, arr2) + "<br>";
  result += "Дополнение B / А: " + Addition(arr2, arr1) + "<br>";
  result +=
    "Симметрическая разность множества А и В: " +
    simmetr_razn(arr1, arr2) +
    "<br>";
  document.getElementById("result").innerHTML = "Результат: <br>" + result;
}
