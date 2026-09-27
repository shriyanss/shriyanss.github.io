let counter = 0;

function count_up() {
  // alert(1);
  //

  counter++;
  document.getElementById("counter").innerHTML = counter;

  console.log("Counter increment:" + counter);
}
