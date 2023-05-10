let err = "";
function validate(space, space1, space2) {
  let sp = space.split("");
  let sp1 = space1.split("");
  let sp2 = space2;
  let repeat = 0;
  let repeat1 = 0;
  let repeat2 = 0;
  if (sp.length > 0 && sp1.length > 0 && sp2.length > 0) {
    for (let i = 0; i < sp2.length; i++) {
      if (sp2[i].length != 2) {
        err = "Размер элемента отношения должен быть равен 2";
        return false;
      }
    }
  } else {
    err = "Одно или несколько полей пустые";
    return false;
  }
  for (let i = 0; i < sp.length; i++) {
    for (let j = 0; j < sp1.length; j++) {
      if (sp[i] == sp1[i]) {
        repeat++;
      }
    }
  }
  if (repeat > 0) {
    err = "Элементы в двух множествах повторяются";
    return false;
  }

  for (let i = 0; i < sp.length; i++) {
    for (let j = i + 1; j < sp.length; j++) {
      if (sp[i] == sp[j]) {
        repeat1++;
      }
    }
  }
  if (repeat1 > 0) {
    err = "Элементы в первом множестве повторяются";
    return false;
  }

  for (let i = 0; i < sp1.length; i++) {
    for (let j = i + 1; j < sp1.length; j++) {
      if (sp1[i] == sp1[j]) {
        repeat2++;
      }
    }
  }
  if (repeat2 > 0) {
    err = "Элементы во втором множестве повторяются";
    return false;
  }
  return true;
}
function count() {
  let A = document.getElementById("1").value.trim();
  let B = document.getElementById("2").value.trim();
  let C = document.getElementById("3").value.trim().split(" ");
  if (validate(A, B, C)) {
    A = A.split("");
    B = B.split("");
    let all1 = B.length;
    let test = 0;
    let N1 = [];
    let N2 = [];
    C.map((e) => e.split(""));
    for (let i = 0; i < C.length; i++) {
      N1.push(C[i][0]);
      N2.push(C[i][1]);
    }
    let rev1 = N1.reverse();
    let rev2 = N2.reverse();
    for (let i = 0; i < B.length; i++) {
      for (let j = B.length - 1; j >= 0; j--) {
        if (A[i] == N1[i] && B[i] == N2[i]) {
          test++;
        } else if (N1[j] == rev1[i] && N2[j] == rev2[i]) {
          test++;
        }
      }
    }
    if (test == all1) {
      document.getElementById("allspl").innerHTML =
        "Отношение является функцией";
    } else {
      document.getElementById("allspl").innerHTML =
        "Отношение не является функцией";
    }
  } else {
    alert(err);
  }
}
