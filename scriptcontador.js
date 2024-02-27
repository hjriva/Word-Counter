const regex = new RegExp("^[0-9]*$");
window.document.getElementById('wordnum').addEventListener("beforeinput", (event) => {
    if (event.data != null && !regex.test(event.data)) 
    event.preventDefault();
    });

window.document.getElementById('characternum').addEventListener("beforeinput", (event) => {
            if (event.data != null && !regex.test(event.data)) 
            event.preventDefault();
            });
//referência: https://stackoverflow.com/questions/22708434/restrict-characters-in-input-field
        
var wordcheck = window.document.getElementById('wordoption')
var characheck = window.document.getElementById('characteroption')

//para o caso de digitar e então restringir

const ContaPalavras = function() {  if (wordcheck.checked) {
    var palavras = window.document.getElementById('mostrapalavras').innerText
    var howmanywords = Number(palavras)
    const wordlimit = Number(window.document.getElementById('wordnum').value)
    if (howmanywords > wordlimit) {
        window.document.getElementById('text').style.color = 'red'
        window.document.getElementById('aviso').style.color = 'red'
        window.document.getElementById('aviso').style.display = 'block'
        const worddiff = howmanywords - wordlimit
            if (worddiff == 1) {
             window.document.getElementById('aviso').innerHTML = `You only need to delete one more word! Almost there!`
            } else {
            window.document.getElementById('aviso').innerHTML = `You need to delete ${worddiff} words!`}
    } 
else if (howmanywords <= wordlimit)  { 
    window.document.getElementById('text').style.color = 'initial'
    window.document.getElementById('aviso').style.color = 'green'
    window.document.getElementById('aviso').style.display = 'block'
    const subpalavras = wordlimit - howmanywords
    if (subpalavras == 1) {
        window.document.getElementById('aviso').innerHTML = `You can only type one last word!`
    } else if (subpalavras == 0) {
        window.document.getElementById('aviso').innerHTML = `You've reached your limit and you can't type any more words!`
    } else {
    window.document.getElementById('aviso').innerHTML = `You can type ${subpalavras} more words!`}
}
} 
else if (characheck.checked) {
    var caracteres = window.document.getElementById('mostracaracteres').innerText
    var howmanycharas = Number(caracteres)
    const charalimit = Number(window.document.getElementById('characternum').value)
        if (howmanycharas > charalimit) {
        window.document.getElementById('text').style.color = 'red'
        window.document.getElementById('aviso').style.display = 'block'
        window.document.getElementById('aviso').style.color = 'red'
        const charadiff = howmanycharas - charalimit
            if (charadiff == 1) {
            window.document.getElementById('aviso').innerHTML = `You only need to delete one more character! Almost there!`
            } else {
            window.document.getElementById('aviso').innerHTML = `You need to delete ${charadiff} characteres!`}
        }
} 

else { 
    window.document.getElementById('text').style.color = 'initial'
    
            window.document.getElementById('aviso').style.display = 'none' 
}

if (characheck.checked && wordcheck.checked) { 
    var caracteres = window.document.getElementById('mostracaracteres').innerText
    var howmanycharas = Number(caracteres)
    const charalimit = Number(window.document.getElementById('characternum').value)
    var palavras = window.document.getElementById('mostrapalavras').innerText
    var howmanywords = Number(palavras)
    const wordlimit = Number(window.document.getElementById('wordnum').value)
    if (howmanycharas > charalimit && howmanywords <= wordlimit) {
        window.document.getElementById('text').style.color = 'red'
   window.document.getElementById('aviso').style.display = 'block'
   window.document.getElementById('aviso').style.color = 'red'
   const charadiff = howmanycharas - charalimit
   if (charadiff == 1) {
       window.document.getElementById('aviso').innerHTML = `You only need to delete one more character! Almost there!`
   } else {
   window.document.getElementById('aviso').innerHTML = `You need to delete ${charadiff} characteres!`}
}
           
   
        else if (howmanywords > wordlimit && howmanycharas <= charalimit) {
    window.document.getElementById('text').style.color = 'red'
   window.document.getElementById('aviso').style.display = 'block'
   window.document.getElementById('aviso').style.color = 'red'
   const worddiff = howmanywords - wordlimit
   if (worddiff == 1) {
       window.document.getElementById('aviso').innerHTML = `You only need to delete one more word! Almost there!`
   } else {
   window.document.getElementById('aviso').innerHTML = `You need to delete ${worddiff} words!`}
           
   
       }

    else if (howmanycharas > charalimit && howmanywords > wordlimit) {
        const charadiff = howmanycharas - charalimit
        const worddiff = howmanywords - wordlimit
        if (worddiff  == 1 && charadiff == 1) {
            window.document.getElementById('aviso').innerHTML =  ` You only need to delete one more word and one more character! Almost there! `}
        else if (worddiff  !== 1 && charadiff == 1)  {window.document.getElementById('aviso').innerHTML =  `You need to delete ${worddiff} words and one more character!`}
        else if (worddiff  == 1 && charadiff !== 1)  {
            window.document.getElementById('aviso').innerHTML =  `You need to delete one more word and ${charadiff} characters!`

        } else if (worddiff  !== 1 && charadiff !== 1) {
            window.document.getElementById('aviso').innerHTML =  `You need to delete ${worddiff} words and ${charadiff} characters!`

        }

    } else if (howmanycharas < charalimit && howmanywords < wordlimit) {
        window.document.getElementById('text').style.color = 'initial'
        window.document.getElementById('aviso').style.color = 'green'
        window.document.getElementById('aviso').style.display = 'block'
        const subcharas = charalimit - howmanycharas
        const subpalavras = wordlimit - howmanywords
        if (subpalavras == 1 && subcharas == 1) {
            window.document.getElementById('aviso').innerHTML = `You can type one more word and one more character!`

        } else if (subpalavras !== 1 && subcharas !== 1 ) {
    window.document.getElementById('aviso').innerHTML = `You can type ${worddiff} more words and ${charadiff} more characters!`
} else if (subpalavras == 1 && subcharas !== 1 ) {
    window.document.getElementById('aviso').innerHTML = `You can type one more word and ${subcharas} more characters!`

} else if (subpalavras !== 1 && subcharas == 1 ) {
    window.document.getElementById('aviso').innerHTML = `You can type ${subpalavras} more words and one more character!`

}
        
    }

    else if (howmanywords == wordlimit && howmanycharas < charalimit)  {
        const subcharas = charalimit - howmanycharas
        window.document.getElementById('aviso').innerHTML = `You've reached your limit and you can't type any more words, but you can type ${subcharas} characteres.`
    }

   } 

   if (characheck.checked && wordcheck.checked == false) {
    ContaCaracteres()
   }



}

const ContaCaracteres = function TestChara() {
    if (characheck.checked) {
    var caracteres = window.document.getElementById('mostracaracteres').innerText
    var howmanycharas = Number(caracteres)
    const charalimit = Number(window.document.getElementById('characternum').value)
   if (howmanycharas > charalimit) {
    window.document.getElementById('text').style.color = 'red'
    window.document.getElementById('aviso').style.color = 'red'
    window.document.getElementById('aviso').style.display = 'block'
    const charadiff = howmanycharas - charalimit
    if (charadiff == 1) {
        window.document.getElementById('aviso').innerHTML = ` You only need to delete one more character! Almost there!`
    } else {
    window.document.getElementById('aviso').innerHTML = ` You need to delete ${charadiff} characteres!`}
    }
 else if (howmanycharas <= charalimit)  { 
    window.document.getElementById('text').style.color = 'initial'
    window.document.getElementById('aviso').style.color = 'green'
    window.document.getElementById('aviso').style.display = 'block'
const subcharas = charalimit - howmanycharas
	 if (subcharas == 1) {  window.document.getElementById('aviso').innerHTML = ` You can type one last character!`}
 else if (subcharas == 0) {
 window.document.getElementById('aviso').innerHTML = ` You've reached your limit and you can't type any more characters!`

} else { 
window.document.getElementById('aviso').innerHTML = ` You can type ${subcaracteres} more characters!`
}   


 
} } else

    if (wordcheck.checked) {
        var palavras = window.document.getElementById('mostrapalavras').innerText
        var howmanywords = Number(palavras)
        const wordlimit = Number(window.document.getElementById('wordnum').value)
        

        
       if (howmanywords > wordlimit) {
        window.document.getElementById('text').style.color = 'red'
        window.document.getElementById('aviso').style.display = 'block'
        window.document.getElementById('aviso').style.color = 'red'
        const worddiff = howmanywords - wordlimit
        if (worddiff == 1) {
            window.document.getElementById('aviso').innerHTML = ` You only need to delete one more word! Almost there!`
        } else {
        window.document.getElementById('aviso').innerHTML = ` You need to delete ${worddiff} words!`}
        }
        


    
        } 
        else { 
            window.document.getElementById('text').style.color = 'initial'
            
                    window.document.getElementById('aviso').style.display = 'none' 
        }

   
    
    if (characheck.checked && wordcheck.checked) {  
        var caracteres = window.document.getElementById('mostracaracteres').innerText
        var howmanycharas = Number(caracteres)
        const charalimit = Number(window.document.getElementById('characternum').value)
        var palavras = window.document.getElementById('mostrapalavras').innerText
        var howmanywords = Number(palavras)
        const wordlimit = Number(window.document.getElementById('wordnum').value)
        if (howmanycharas > charalimit && howmanywords <= wordlimit) {
            window.document.getElementById('text').style.color = 'red'
       window.document.getElementById('aviso').style.display = 'block'
       window.document.getElementById('aviso').style.color = 'red'
       const charadiff = howmanycharas - charalimit
       if (charadiff == 1) {
           window.document.getElementById('aviso').innerHTML = ` You only need to delete one more character! Almost there!`
       } else {
       window.document.getElementById('aviso').innerHTML = ` You need to delete ${charadiff} characteres!`}
   }
               
       
            else if (howmanywords > wordlimit && howmanycharas <= charalimit) {
                window.document.getElementById('text').style.color = 'red'
       window.document.getElementById('aviso').style.display = 'block'
       window.document.getElementById('aviso').style.color = 'red'
       const worddiff = howmanywords - wordlimit
       if (worddiff == 1) {
           window.document.getElementById('aviso').innerHTML = ` You only need to delete one more word! Almost there!`
       } else {
       window.document.getElementById('aviso').innerHTML = ` You need to delete ${worddiff} words!`}
               
       
           }

        else if (howmanycharas > charalimit && howmanywords > wordlimit) {
            window.document.getElementById('aviso').style.color = 'red'
            const charadiff = howmanycharas - charalimit
            const worddiff = howmanywords - wordlimit
           
            if (worddiff  == 1 && charadiff == 1) {
                window.document.getElementById('aviso').innerHTML =  ` You only need to delete one more word and one more character! Almost there! `}
            else if (worddiff  !== 1 && charadiff == 1)  {window.document.getElementById('aviso').innerHTML =  `You need to delete ${worddiff} words and one more character!`}
            else if (worddiff  == 1 && charadiff !== 1)  {
                window.document.getElementById('aviso').innerHTML =  `You need to delete one more word and ${charadiff} characters!`

            } else if (worddiff  !== 1 && charadiff !== 1) {
                window.document.getElementById('aviso').innerHTML =  `You need to delete ${worddiff} words and ${charadiff} characters!`
 
            }
        
        }  
        else if (howmanycharas < charalimit && howmanywords < wordlimit) {
            window.document.getElementById('text').style.color = 'initial'
            window.document.getElementById('aviso').style.color = 'green'
            window.document.getElementById('aviso').style.display = 'block'
            const subcharas = charalimit - howmanycharas
            const subpalavras = wordlimit - howmanywords
            if (subpalavras == 1 && subcharas == 1) {
                window.document.getElementById('aviso').innerHTML = `You can type one more word and one more character!`

            } else if (subpalavras !== 1 && subcharas !== 1 ) {
        window.document.getElementById('aviso').innerHTML = `You can type ${worddiff} more words and ${charadiff} more characters!`
    } else if (subpalavras == 1 && subcharas !== 1 ) {
        window.document.getElementById('aviso').innerHTML = `You can type one more word and ${subcharas} more characters!`

    } else if (subpalavras !== 1 && subcharas == 1 ) {
        window.document.getElementById('aviso').innerHTML = `You can type ${subpalavras} more words and one more character!`

    }
            
        }
    
        else if (howmanywords == wordlimit && howmanycharas < charalimit)  {
            const subcharas = charalimit - howmanycharas
            window.document.getElementById('aviso').innerHTML = `You've reached your limit and you can't type any more words, but you can type ${subcharas} characteres.`
        }
       
        
       }
     
       if (wordcheck.checked && characheck.checked == false) {
        ContaPalavras()
       } 

   }

wordcheck.addEventListener('change', ContaPalavras) 
characheck.addEventListener('change', ContaCaracteres)



document.getElementById('wordnum').addEventListener('focus', function() {
    if (wordcheck.checked) {
        wordcheck.click()
    }
})
document.getElementById('characternum').addEventListener('focus', function() {
    if (characheck.checked) {
        characheck.click()
    }
})

document.getElementById('wordnum').addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        wordcheck.click()
        document.getElementById('wordnum').blur()
    }
})

document.getElementById('characternum').addEventListener("keyup", ({key}) => {
    if (key === "Enter") {
        characheck.click()
        document.getElementById('characternum').blur()

    }
})

//https://stackoverflow.com/questions/7060750/detect-the-enter-key-in-a-text-input-field


var contcheck = window.document.getElementById('contractions')
contcheck.addEventListener('change', function ContractCheck () {
    let wordsplit = CCheck()
    function CCheck () {
       
        if (contcheck.checked) {
            return new RegExp("[\\s,.]+")
        } else if (contcheck.checked == false) {
            return new RegExp("[\\s',.]+")
        }
    }
    let words = window.document.getElementById('text').value
    count = 0
    let split = words.split(wordsplit)
    for (let i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }   
    }


window.document.getElementById('mostrapalavras').innerHTML = count

if (wordcheck.checked) {
    ContaPalavras()
}

})


//verificar enquanto digita

document.getElementById('text').addEventListener('input', function Contador() {

    let words = window.document.getElementById('text').value
    count = 0

    let wordsplit = CCheck()

    function CCheck () {
    var contcheck = window.document.getElementById('contractions')
    if (contcheck.checked) {
        return new RegExp("[\\s,.]+")
    } else if (contcheck.checked == false) {
        return new RegExp("[\\s',.]+")
    }
}
 

    
    let split = words.split(wordsplit);
    

    for (let i = 0; i < split.length; i++) {
        if (split[i] != "") {
            count += 1;
        }
    }

    

    window.document.getElementById('mostrapalavras').innerHTML = count
    window.document.getElementById('mostracaracteres').innerHTML = `${words.length}`

    

    // fonte de código base para contador: https://www.geeksforgeeks.org/how-to-make-a-word-count-in-textarea-using-javascript/, adaptando split para regex de acordo com dicas daqui: https://stackoverflow.com/questions/650022/how-do-i-split-a-string-with-multiple-separators-in-javascript e aqui https://stackoverflow.com/questions/16048148/regex-to-check-if-whitespace-present

    const wordcheck = window.document.getElementById('wordoption')
    const characheck = window.document.getElementById('characteroption')
    const wordlimit = Number(window.document.getElementById('wordnum').value)
    const charalimit = Number(window.document.getElementById('characternum').value)

    ContaPalavras()
    ContaCaracteres()


})

    // https://stackoverflow.com/questions/14544104/checkbox-check-event-listener */


