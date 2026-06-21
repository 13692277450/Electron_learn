const btn1 = document.getElementById("btn1");
const btnSave = document.getElementById("btnSave");
const txt1 = document.getElementById("txt1");

btn1.onclick = () => {
  //   alert("Click me");
  console.log(myApi.version);
};

btnSave.onclick = () => {
  myApi.savefile(txt1.value);
};

const btnRead = document.getElementById("btnRead");
const txt2 = document.getElementById("txt2");

btnRead.onclick = async () => {
  const data = await myApi.readfile();
  txt2.value = data;
  alert(data);
  console.log(data);
};
