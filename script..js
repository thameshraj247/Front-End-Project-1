function addCart(btn) {
  const parent = btn.closest(".count-item"); // find nearest count-item
  const countBox = parent.querySelector(".count"); // find the count box
  let count = parseInt(countBox.innerHTML);
  count++;
  countBox.innerHTML = count;
}

function subCart(btn) {
  const parent = btn.closest(".count-item");
  const countBox = parent.querySelector(".count");
  let count = parseInt(countBox.innerHTML);
  if (count > 0) count--;
  countBox.innerHTML = count;
}
