document.getElementById("calbtn").addEventListener("click", calculate);

function calculate() {
  let av1 = Number(document.getElementById("Css1").value);
  let av2 = Number(document.getElementById("sp1").value);
  let av3 = Number(document.getElementById("sp2").value);
  let av4 = Number(document.getElementById("Css2").value);
  let av5 = Number(document.getElementById("proA").value);
  let Rslt = (av1 + av2 + av3 + av4 + av5) / 5;

  document.getElementById("rslt").innerHTML = `Your average is ${Rslt}`;
}
