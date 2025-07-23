const correctPassword = "5757";
const gridContainer = document.getElementById("gridContainer");
const giftPage = document.querySelector(".gift-page");
const lockScreen = document.querySelector(".lock-screen");
const errorMsg = document.getElementById("errorMsg");

// البيانات التفاعلية للمربعات
const boxes = [
  { title: "Gözlerindeki Işık", text: "Senin gözlerinde kayboldum çünkü onlar bir evren kadar derin ve huzur dolu." },
  { title: "Kahkahan", text: "Bir tebessümün bile günümü aydınlatmaya yeterli." },
  { title: "Varlığın", text: "Hayatımda olduğun için her gün şükrediyorum." },
  { title: "Bakışların", text: "Sadece bir bakışınla kalbimi ısıtabiliyorsun." },
  { title: "Sesin", text: "Sesini duymak, en sevdiğim şarkıdan bile daha huzur verici." },
  { title: "Dokunuşun", text: "Ellerin ellerime değdiğinde dünya duruyor sanki." },
  { title: "Sabah Mesajların", text: "Her sabah senden gelen mesajla başlamak, günümün en güzel kısmı." },
  { title: "Kokun", text: "Kokun içimi sarıyor ve seni yanımda hissettiriyor." },
  { title: "Anılarımız", text: "Birlikte geçirdiğimiz her an, kalbimde bir hazine gibi." },
  { title: "İsmin", text: "İsmini her duyduğumda kalbim hızla atıyor." },
  { title: "Gülüşün", text: "Gülüşün, içimdeki tüm karanlıkları aydınlatıyor." },
  { title: "Sen", text: "Sadece sen olduğun için bile sevilmeye değersin." },
];

// تحقق من كلمة المرور
function checkPassword() {
  const userInput = document.getElementById("passwordInput").value;
  if (userInput === correctPassword) {
    lockScreen.style.display = "none";
    giftPage.style.display = "block";
    loadGrid();
  } else {
    errorMsg.textContent = "رمز خاطئ. حاول مرة أخرى.";
  }
}

// إنشاء المربعات
function loadGrid() {
  for (let i = 0; i < 82; i++) {
    const box = document.createElement("div");
    box.className = "box";

    if (i < boxes.length) {
      box.innerText = boxes[i].title;
      box.addEventListener("click", () => {
        alert(boxes[i].text);
      });
    } else {
      box.innerText = "?";
      box.classList.add("disabled");
    }

    gridContainer.appendChild(box);
  }
}