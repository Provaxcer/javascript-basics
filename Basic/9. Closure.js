function sanu() {
  let a = 10;
  function san() {
    console.log(a);
  }
  return san;
}

let santanu = sanu();

santanu()