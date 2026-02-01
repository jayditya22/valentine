const noBtn = document.getElementById("no");
const card = document.querySelector(".card");

noBtn.addEventListener("mouseover", () => {
  const cardPadding = 40; // safe margin inside card

  const maxX =
    card.clientWidth - noBtn.offsetWidth - cardPadding;
  const maxY =
    card.clientHeight - noBtn.offsetHeight - cardPadding;

  const randomX =
    Math.random() * maxX + cardPadding / 2;
  const randomY =
    Math.random() * maxY + cardPadding / 2;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
});

document.getElementById("yes").addEventListener("click", () => {
  document.body.innerHTML = `
    <style>
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #966FD6;
        font-family: Poppins, sans-serif;
      }

      .oval {
        background: #fdfdfd;
        color: #966FD6;
        padding: 30px 70px;
        border-radius: 999px;
        font-size: 42px;
        font-weight: 600;
        box-shadow: 0 18px 35px rgba(0,0,0,0.25);
      }
    </style>

    <div class="oval">
      💖 Yayy :) 💖
    </div>
  `;
});

