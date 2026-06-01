        const ChooseColor  = document.querySelector('#ChooseColor')
        const ColorPreview = document.querySelector('#ColorPreview')
        const Colorhistory = document.querySelector('#Colorhistory')
        const Clearhistory = document.querySelector('#Clearhistory')

        ChooseColor.addEventListener('input',function(){
            const SelectColor = ChooseColor.value;
            ColorPreview.style.backgroundColor = SelectColor
            addColorToHistory(SelectColor)
        })
        // function to add select color to te history
            function addColorToHistory(Color){
            const li = document.createElement('li')
            li.textContent = Color
          li.style.color = Color
            Colorhistory.appendChild(li)
        }

        Clearhistory.addEventListener('click',function(){
            Colorhistory.innerHTML=''
           
        })


