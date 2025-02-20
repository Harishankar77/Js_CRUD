let id = "";
// localStorage.clear();
selectData();
//------------------------//------------------------------//
function manageData() {
  document.getElementById("msg").innerHTML = "";
  let name = document.getElementById("name").value;
  if (name == "") {
    document.getElementById("msg").innerHTML = "Please Enter Your Name";
  } else {
    if (id === "") {
      let arr = getCrudData();
      console.log(arr);
      if (arr == null) {
        let data = [name];
        setCrudData(data);
      } else {
        arr.push(name);
        setCrudData(arr);
      }
      document.getElementById("name").value = "";
      document.getElementById("msg").innerHTML = "Data Added :)";
      document.getElementById("msg").style.color = "blue";
      setTimeout(message, 1250);

      function message() {
        document.getElementById("msg").innerHTML = "";
      }

      selectData();
    } else {
      let arr = getCrudData();
      arr[id] = name;
      setCrudData(arr);
      document.getElementById("msg").innerHTML = "Data Updated :)";
      document.getElementById("msg").style.color = "green";
      setTimeout(message1, 1250);
      function message1() {
        document.getElementById("msg").innerHTML = "";
      }

      id = "";
      document.getElementById("name").value = "";
      selectData();
    }
  }
}

//----------------------------//------------------------------//
function selectData() {
  let arr = getCrudData();
  if (arr != null) {
    let html = "";
    let sno = 1;
    for (let k in arr) {
      html =
        html +
        `<tr> <td>${sno}</td><td>${arr[k]}</td> <td><a href="javascript:void(0)" onclick="editData(${k})">Edit</a> </td><td><a href="javascript:void(0)" onclick='deleteData(${k})'>Delete</a></td> </tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = html;
  }
}
function editData(rid) {
  let arr = getCrudData();
  document.getElementById("name").value = arr[rid];
  id = rid;
}

//---------------------------//--------------------------//
function deleteData(rid) {
  let arr = getCrudData();
  arr.splice(rid, 1);
  setCrudData(arr);
  document.getElementById("msg").innerHTML = "Date Deleted!";
  document.getElementById("msg").style.color = "red";
  // create a time out message
  setTimeout(message2, 1250);
  function message2() {
    document.getElementById("msg").innerHTML = "";
  }
  selectData();
}

// crud deta ko fetch karke dega
function getCrudData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}
function setCrudData(data) {
  localStorage.setItem("crud", JSON.stringify(data));
}
