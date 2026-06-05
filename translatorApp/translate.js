const fromtext = document.querySelector('.from-text');
const totext = document.querySelector('.to-text');

const selectTag = document.querySelectorAll('select');
const exchangeIcon = document.querySelector('.exchange');
const translateBtn = document.querySelector('button')
const icons = document.querySelectorAll('.row i')


  selectTag.forEach((tag ,id)=> {
    for (const country_code in countries) {

        // selecting English by default as FRON  language and Somali as TO langauge
      let selected;
      if( id == 0 && country_code =='en-GB'){
            selected = 'selected';
      }else if( id==1 && country_code == 'so-SO'){
         selected = 'selected';
      }
       let option =` <option value="${country_code}" ${selected}>${countries[country_code]}</option>`;
       tag.insertAdjacentHTML('beforeend', option)  // adding options tag inside select tag;
        
    }
});

translateBtn.addEventListener('click',()=> {
    
    let text = fromtext.value,
    translateFrom =selectTag[0].value,  // getting fromSelect tag value
    translateTo   =selectTag[1].value;   // getting toSelect tag value,
    // 
    const apiUrl=`https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo }`
    fetch(apiUrl).then(res => res.json()).then(data => {
        console.log(data)
          totext.value =data.responseData.translatedText
    })
});
// waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan qaaaaaaaaanayaaaaaaaaaaaaaa
   //exechange textarea and select tag values//

    exchangeIcon.addEventListener('click',()=>{

        let temText = fromtext.value;
        fromtext.value = totext.value;
        totext.value = temText;

        let tempLang = selectTag[0].value
        selectTag[0].value = selectTag[1].value;
        selectTag[1].value = tempLang
    })


    //waaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaan qadanayaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    icons.forEach(icons => {
        icons.addEventListener('click', ({target}) =>{
            if(target.classList.contains('fa-copy')) {
                // if clicked icon has from id, copy the fromTextarea value else copy the toTextarea value
                  if(target.id == 'from'){
                navigator.clipboard.writeText(fromtext.value);
            }
            else{
                navigator.clipboard.writeText(totext.value);
                 
            }
            }else{
                let utterance;
                  
                // if clicked icon has from id, copy the fromTextarea value else copy the toTextarea value
                  if(target.id == 'from'){
               utterance = new SpeechSynthesisUtterance(fromtext.value),
               utterance.lang = selectTag[0].value // setting utterance language to fromSelect tag value
            }
            else{
                utterance = new SpeechSynthesisUtterance(totext.value),
                 utterance.lang = selectTag[1].value;  //setting utterance language to toSelect tag value
            }
            speechSynthesis.speak(utterance);
            
        }
        })
    })