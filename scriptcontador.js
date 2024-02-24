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

wordcheck.addEventListener('change', function Test() {
    if (wordcheck.checked) {
        var palavras = window.document.getElementById('mostrapalavras').innerText
        var howmanywords = Number(palavras)
        const wordlimit = Number(window.document.getElementById('wordnum').value)
        if (howmanywords > wordlimit) {
            window.document.getElementById('text').style.color = 'red'
            window.document.getElementById('aviso').style.color = 'red'
            window.document.getElementById('aviso').style.display = 'block'
            const worddiff = howmanywords - wordlimit
                if (worddiff == 1) {
                 window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais uma palavra! Quase lá!`
                } else {
                window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${worddiff} palavras`}
        } 
    else if (howmanywords <= wordlimit)  { 
        window.document.getElementById('text').style.color = 'initial'
        window.document.getElementById('aviso').style.color = 'green'
        window.document.getElementById('aviso').style.display = 'block'
        const subpalavras = wordlimit - howmanywords
        if (subpalavras == 1) {
            window.document.getElementById('aviso').innerHTML = ` Você pode digitar mais uma palavra!`
        } else if (subpalavras == 0) {
            window.document.getElementById('aviso').innerHTML = ` Seu texto atingiu o limite de palavras estabelecido! Não pode digitar mais nenhuma palavra.`
        } else {
        window.document.getElementById('aviso').innerHTML = ` Você pode digitar mais ${subpalavras} palavras!`}
    }
} 
    else if (characheck.checked) {
        var caracteres = window.document.getElementById('mostracaracteres').innerText
        var howmanycharas = Number(caracteres)
        const charalimit = Number(window.document.getElementById('characternum').value)
            if (howmanycharas > charalimit) {
            window.document.getElementById('text').style.color = 'red'
            window.document.getElementById('aviso').style.display = 'block'
            const charadiff = howmanycharas - charalimit
                if (charadiff == 1) {
                window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais um caractere! Quase lá!`
                } else {
                window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${charadiff} caracteres!`}
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
       const charadiff = howmanycharas - charalimit
       if (charadiff == 1) {
           window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais um caractere! Quase lá!`
       } else {
       window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${charadiff} caracteres!`}
   }
               
       
            else if (howmanywords > wordlimit && howmanycharas <= charalimit) {
                window.document.getElementById('text').style.color = 'red'
       window.document.getElementById('aviso').style.display = 'block'
       window.document.getElementById('aviso').style.color = 'red'
       const worddiff = howmanywords - wordlimit
       if (worddiff == 1) {
           window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais uma palavra! Quase lá!`
       } else {
       window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${worddiff} palavras`}
               
       
           }

        else if (howmanycharas > charalimit && howmanywords > wordlimit) {
            const charadiff = howmanycharas - charalimit
            const worddiff = howmanywords - wordlimit
            if (worddiff  == 1 && charadiff == 1) {
                window.document.getElementById('aviso').innerHTML =  `Diminuir 1 caractere e 1 palavra... Quase lá! `}
            else if (worddiff  !== 1 && charadiff == 1)  {window.document.getElementById('aviso').innerHTML =  `Diminuir 1 caractere e ${worddiff} palavras...`}
            else if (worddiff  == 1 && charadiff !== 1)  {
                window.document.getElementById('aviso').innerHTML =  `Diminuir ${charadiff} caracteres e 1 palavra... Quase!`

            } else if (worddiff  !== 1 && charadiff !== 1) {
                window.document.getElementById('aviso').innerHTML =  `Diminuir ${charadiff} caracteres e ${worddiff} palavras... Quase!`
 
            }

        } else if (howmanycharas < charalimit && howmanywords < wordlimit) {
            window.document.getElementById('text').style.color = 'initial'
            window.document.getElementById('aviso').style.color = 'green'
            window.document.getElementById('aviso').style.display = 'block'
            const subcharas = charalimit - howmanycharas
            const subpalavras = wordlimit - howmanywords
            if (subpalavras == 1 && subcharas == 1) {
                window.document.getElementById('aviso').innerHTML = `Pode digitar mais uma palavra e um caractere...`

            } else if (subpalavras !== 1 && subcharas !== 1 ) {
        window.document.getElementById('aviso').innerHTML = `Pode digitar mais ${subpalavras} palavras e ${subcharas} caracteres...`
    } else if (subpalavras == 1 && subcharas !== 1 ) {
        window.document.getElementById('aviso').innerHTML = `Pode digitar mais uma palavra e ${subcharas} caracteres...`

    } else if (subpalavras !== 1 && subcharas == 1 ) (
        window.document.getElementById('aviso').innerHTML = `Pode digitar mais ${subpalavras} palavras e um caractere...`

    )
            
        }
    
       }

    }
) 

characheck.addEventListener('change', function TestChara() {
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
        window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais um caractere! Quase lá!`
    } else {
    window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${charadiff} caracteres!`}
    }
 else if (howmanycharas <= charalimit)  { 
    window.document.getElementById('text').style.color = 'initial'
    window.document.getElementById('aviso').style.color = 'green'
    window.document.getElementById('aviso').style.display = 'block'
const subcharas = charalimit - howmanycharas
	 if (subcharas == 1) {  window.document.getElementById('aviso').innerHTML = ` Você pode digitar mais um caractere!`}
 else if (subcharas == 0) {
 window.document.getElementById('aviso').innerHTML = ` Seu texto atingiu o limite de caracteres estabelecido! Não pode digitar mais nenhum caractere.`

} else { 
window.document.getElementById('aviso').innerHTML = ` Você pode digitar mais ${subcharas} caracteres!`
}   


 
} } else

    if (wordcheck.checked) {
        var palavras = window.document.getElementById('mostrapalavras').innerText
        var howmanywords = Number(palavras)
        const wordlimit = Number(window.document.getElementById('wordnum').value)
        

        
       if (howmanywords > wordlimit) {
        window.document.getElementById('text').style.color = 'red'
        window.document.getElementById('aviso').style.display = 'block'
        const worddiff = howmanywords - wordlimit
        if (worddiff == 1) {
            window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais uma palavra! Quase lá!`
        } else {
        window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${worddiff} palavras`}
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
       const charadiff = howmanycharas - charalimit
       if (charadiff == 1) {
           window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais um caractere! Quase lá!`
       } else {
       window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${charadiff} caracteres!`}
   }
               
       
            else if (howmanywords > wordlimit && howmanycharas <= charalimit) {
                window.document.getElementById('text').style.color = 'red'
       window.document.getElementById('aviso').style.display = 'block'
       window.document.getElementById('aviso').style.color = 'red'
       const worddiff = howmanywords - wordlimit
       if (worddiff == 1) {
           window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais uma palavra! Quase lá!`
       } else {
       window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${worddiff} palavras`}
               
       
           }

        else if (howmanycharas > charalimit && howmanywords > wordlimit) {
            window.document.getElementById('aviso').style.color = 'red'
            const charadiff = howmanycharas - charalimit
            const worddiff = howmanywords - wordlimit
           
            if (worddiff  == 1 && charadiff == 1) {
                window.document.getElementById('aviso').innerHTML =  `Diminuir 1 caractere e 1 palavra... Quase lá! `}
            else if (worddiff  !== 1 && charadiff == 1)  {window.document.getElementById('aviso').innerHTML =  `Diminuir 1 caractere e ${worddiff} palavras...`}
            else if (worddiff  == 1 && charadiff !== 1)  {
                window.document.getElementById('aviso').innerHTML =  `Diminuir ${charadiff} caracteres e 1 palavra... Quase!`

            } else if (worddiff  !== 1 && charadiff !== 1) {
                window.document.getElementById('aviso').innerHTML =  `Diminuir ${charadiff} caracteres e ${worddiff} palavras... Quase!`
 
            }
        
        }  
        else if (howmanycharas < charalimit && howmanywords < wordlimit) {
            window.document.getElementById('text').style.color = 'initial'
            window.document.getElementById('aviso').style.color = 'green'
            window.document.getElementById('aviso').style.display = 'block'
            const subcharas = charalimit - howmanycharas
            const subpalavras = wordlimit - howmanywords
            if (subpalavras == 1 && subcharas == 1) {
                window.document.getElementById('aviso').innerHTML = `Pode digitar mais uma palavra e um caractere...`

            } else if (subpalavras !== 1 && subcharas !== 1 ) {
        window.document.getElementById('aviso').innerHTML = `Pode digitar mais ${subpalavras} palavras e ${subcharas} caracteres...`
    } else if (subpalavras == 1 && subcharas !== 1 ) {
        window.document.getElementById('aviso').innerHTML = `Pode digitar mais uma palavra e ${subcharas} caracteres...`

    } else if (subpalavras !== 1 && subcharas == 1 ) (
        window.document.getElementById('aviso').innerHTML = `Pode digitar mais ${subpalavras} palavras e um caractere...`

    )
            
        }
    

       

       }
     
       

   }

  
) 

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

    


    if (wordcheck.checked) { 
        
    
        if (count > wordlimit) {
            window.document.getElementById('text').style.color = 'red'
            window.document.getElementById('aviso').style.display = 'block'
            window.document.getElementById('aviso').style.color = 'red'
            const worddiff = count - wordlimit
            if (worddiff == 1) {
                window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais uma palavra! Quase lá!`
            } else {
            window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${worddiff} palavras`}
            
    
        } else if (count <= wordlimit) {
            window.document.getElementById('text').style.color = 'initial'
            window.document.getElementById('aviso').style.display = 'block'
            window.document.getElementById('aviso').style.color = 'green'
            const subpalavras = wordlimit - count
            if (subpalavras == 1) {
                window.document.getElementById('aviso').innerHTML = `Você só pode digitar mais uma palavra!`
            } else if (subpalavras == 0 ) {
                window.document.getElementById('aviso').innerHTML = `Você atingiu seu limite e não pode digitar mais nenhuma palavra!`
            } else {
            window.document.getElementById('aviso').innerHTML = `Você ainda pode digitar ${subpalavras} palavras!`}
        }       
    } else 
    

    if (characheck.checked) { 
        if (words.length > charalimit) {
            window.document.getElementById('text').style.color = 'red'
            window.document.getElementById('aviso').style.display = 'block'
            window.document.getElementById('aviso').style.color = 'red'
            const charadiff = words.length - charalimit
            if (charadiff == 1) {
                window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais um caractere! Quase lá!`
            } else {
            window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${charadiff} caracteres`}
            
    
        } else {
            window.document.getElementById('text').style.color = 'initial'
            window.document.getElementById('aviso').style.display = 'block'
            window.document.getElementById('aviso').style.color = 'green'
            const subcaracteres = charalimit - words.length 
            if (subcaracteres == 1) { window.document.getElementById('aviso').innerHTML = `Você só pode digitar mais um caractere!` } else if (subcaracteres == 0 ) { window.document.getElementById('aviso').innerHTML = `Você atingiu seu limite e não pode digitar mais nenhum caractere!` } else { window.document.getElementById('aviso').innerHTML = `Você ainda pode digitar ${subcaracteres} caracteres!`}

        }      
         
    }
    
    if (wordcheck.checked && characheck.checked) { 
        if (words.length > charalimit && count <= wordlimit) {
            window.document.getElementById('text').style.color = 'red'
            window.document.getElementById('aviso').style.display = 'block'
            window.document.getElementById('aviso').style.color = 'red'
            const charadiff = words.length - charalimit
            if (charadiff == 1) {
                window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais um caractere! Quase lá!`
            } else {
            window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${charadiff} caracteres`}
            
    
            } else if (count > wordlimit && words.length <= charalimit) {
            window.document.getElementById('text').style.color = 'red'
            window.document.getElementById('aviso').style.display = 'block'
            window.document.getElementById('aviso').style.color = 'red'
            const worddiff = count - wordlimit
            if (worddiff == 1) {
                window.document.getElementById('aviso').innerHTML = ` Precisa diminuir só mais uma palavra! Quase lá!`
            } else {
            window.document.getElementById('aviso').innerHTML = ` Precisa diminuir ${worddiff} palavras`}
            
    
        } else if (count > wordlimit && words.length > charalimit) {
            const charadiff = words.length - charalimit
            const worddiff = count - wordlimit
            window.document.getElementById('aviso').innerHTML = `Precisa diminuir ${worddiff} palavras e ${charadiff} caracteres!`
        }
        else {
            window.document.getElementById('text').style.color = 'initial'
            window.document.getElementById('aviso').style.display = 'block'
            window.document.getElementById('aviso').style.color = 'green'
            const subpalavras = wordlimit - count
            const subcaracteres = charalimit - words.length 
            window.document.getElementById('aviso').innerHTML = ` Você pode digitar ${subpalavras} palavras e ${subcaracteres} caracteres`
     }   
    
    

    }

   
}

    )

    // https://stackoverflow.com/questions/14544104/checkbox-check-event-listener */


