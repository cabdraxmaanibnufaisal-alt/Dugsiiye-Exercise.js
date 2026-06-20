const fromLang = document.querySelector("#from-language");
const toLang = document.querySelector("#to-language");
const textarea = document.querySelector("#text");
const result = document.querySelector("#translatedText");
const btn = document.querySelector("#translate-btn");

btn.addEventListener("click", async () => {
  const from = fromLang.value;
  const to = toLang.value;
  const text = textarea.value;

  if (!from || !to || !text) {
    alert("please fill all fields");
    return;
  }

  const url = "https://microsoft-translator-text.p.rapidapi.com/translate";

  const params = new URLSearchParams();
  params.append("source_language", from);
  params.append("target_language", to);
  params.append("text", text);

  const options = {
    method: "POST",
    headers: {
      "x-rapidapi-key": "4cc74857e9msh4befe9513d53c21p162eeajsn313fd1d9c1fd",
      "x-rapidapi-host": "microsoft-translator-text.p.rapidapi.com",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params,
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);

    const translated = data.data?.translatedText || "Translation failed";

    result.innerText = translated;
  } catch (error) {
    console.log(error);
    result.innerText = "Error occurred";
  }
});
