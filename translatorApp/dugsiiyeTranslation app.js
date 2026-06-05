// ================= SELECT ELEMENTS =================
const btn = document.getElementById("translate-btn");
const fromLang = document.getElementById("from-language");
const toLang = document.getElementById("to-language");
const textInput = document.getElementById("text");
const result = document.getElementById("translatedText");

// ================= TRANSLATE FUNCTION =================
btn.addEventListener("click", async () => {

    const from = fromLang.value;
    const to = toLang.value;
    const text = textInput.value;

    if (!from || !to || !text) {
        alert("Please fill all fields");
        return;
    }

    const url = "https://text-translator2.p.rapidapi.com/translate";

const params = new URLSearchParams();
params.append("source_language", from);
params.append("target_language", to);
params.append("text", text);

const options = {
    method: "POST",
    headers: {
        "x-rapidapi-key": "0f6f0a5040mshb6c46d037121069p12afc1jsn7efc41d5a0ef",
        "x-rapidapi-host": "text-translator2.p.rapidapi.com",
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: params
};

try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    const translated = data.data?.translatedText || "Translation failed";

    result.innerText = translated;

} catch (error) {
    console.error(error);
    result.innerText = "Error occurred";
}  
});












// const button = document.querySelector("button");
// const fromInput = document.querySelector("#somali");
// const toInput = document.querySelector("#engilish");
// const textInput = document.querySelector("#text");
// const resultDiv = document.querySelector(".tanslate");

// // https://developers.google.com/workspace/admin/directory/v1/languages

// button.addEventListener("click", translateText);

// async function translateText() {

//     const from = fromInput.value.trim();
//     const to = toInput.value.trim();
//     const text = textInput.value.trim();

//     if (!from || !to || !text) {
//         alert("Fadlan dhammaan meelaha buuxi");
//         return;
//     }

//   const url = 'https://google-translate113.p.rapidapi.com/api/v1/translator/text';

//     const options = {
//         method: "POST",
//         headers: {
//             "content-type": "application/json",
//             "X-RapidAPI-Key": 'fe7de5b27fmsh7b8166eb6d0e168p11e3d9jsn0c24e2d322e6',
//             "X-RapidAPI-Host": 'google-translate113.p.rapidapi.com',
//         },
//         body: JSON.stringify({
//             from: from,
//             to: to,
//             text: text
//         })
//     };

//     try {
//         const response = await fetch(url, options);
//         console.log(response)
//         const data = await response.json();
//         console.log(data)
//         resultDiv.innerHTML = `<strong>Result:</strong> ${data.trans}`;
//     } catch (error) {
//         resultDiv.innerHTML = "waa qalad saxip";
//         console.error(error);
//     }
// }