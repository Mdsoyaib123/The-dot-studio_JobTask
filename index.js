function card1() {
  const card1Container = document.getElementById("cardOne");
  const img = document.createElement("img");
  img.src =
    "https://i.postimg.cc/K8DnFX6f/92093f343d52ef035de6e1beed4d0e39-1.jpg";
  card1Container.appendChild(img);
}
card1();

function card2() {
  const card2Container = document.getElementById("cardTwo");
  const img = document.createElement("img");
  img.src =
    "https://i.postimg.cc/HkW7dHJ3/image2-2-1.jpg";
  card2Container.appendChild(img);
}
card2();

function card3() {
  const card3Container = document.getElementById("cardThree");
  const img = document.createElement("img");
  img.src =
    "https://i.postimg.cc/9frRwpY7/image3-1.jpg";
  card3Container.appendChild(img);
}
card3();

function card4() {
  const card4Container = document.getElementById("cardFour");
  const img = document.createElement("img");
  img.src =
    "https://i.postimg.cc/L6KtdrB0/image4-1.jpg";
  card4Container.appendChild(img);

  const card4Des = document.getElementsByClassName('card4Des')
  // const div = document.createElement('div')
  // div.innerHTML = '<h1>Holistic Development </h1><p>Right Mix of Curricular and Co-Curricular Activities.</p>'
  // card4Des.appendChild(div)

}
card4();
