function readFile(fileName){
  let test = 0
  if(fileName == './test1.txt'){
    test = 'test1';
  }else if(fileName == './test2.txt'){
    test = 'test2';
  }else if(fileName == './test3.txt'){
    test ='test3';
  }else if(fileName == ''){
    
  }
  const correctAnswersTest1= 'a,d,a,b,b,a,a,d,a,d,a,d,d,d,c,b,c,c,d,b'.split(',')
  const correctAnswersTest2= 'b,d,b,d,c,c,b,d,c,d,d,c,a,d,d,d,d,d,b,b'.split(',')
  const correctAnswersTest3= 'd,d,c,d,d,a,a,c,a,d,a,d,a,b,d,a,d,a,c,c'.split(',')

    const questions = [];
    fetch(fileName)
    .then(response => response.text())
    .then(contenido => {
      const lineas = contenido.split('\n');
      let resultadoTxt = ""
      // Hacer algo con las líneas
      

    for (let i = 0; i < lineas.length ; i += 5) {
        const question = lineas[i].trim();
        const answer = {"a" : lineas[i + 1].trim(),"b" : lineas[i + 2].trim(),"c" : lineas[i + 3].trim(),"d" : lineas[i + 4].trim()};

        questions.push({ question, answer });
    }
    let counter = -1
    pregTab = document.getElementById('tablaPreguntas')
    console.log(questions)
  questions.forEach(element => {
    counter++
    pregunta = document.createElement('pregunta-component')
    pregunta.setAttribute('question',element.question)
    pregunta.setAttribute('answera',element.answer.a)
    pregunta.setAttribute('test-name',test)
    pregunta.setAttribute('numero',counter)

    if(test == 'test1'){
      pregunta.setAttribute('correctOne',correctAnswersTest1[counter])

    }else if(test == 'test2'){
      pregunta.setAttribute('correctOne',correctAnswersTest2[counter])

    }else if(test == 'test3'){
      pregunta.setAttribute('correctOne',correctAnswersTest3[counter])

    }
    pregunta.setAttribute('answerb',element.answer.b)
    pregunta.setAttribute('answerc',element.answer.c)
    pregunta.setAttribute('answerd',element.answer.d)
    pregTab.appendChild(pregunta)
  })
})

.catch(error => {
    console.error( error);
});
return  questions ;
}


function corregirTest(event){
  let incorrects = []
  console.log('Hola')
  let preguntas = Array.from(document.getElementsByTagName('pregunta-component'))
  console.log(preguntas)
  preguntas.forEach(pregunta => {
    let correcta = pregunta.getAttribute('correctOne')
    console.log()
    let identificador = pregunta.getAttribute('test-name')+ '-' + pregunta.getAttribute('numero') + '-' + correcta
    let marcada = document.getElementById(identificador)
    if(marcada.checked != true){
      incorrects.push(identificador.split('-')[1]+identificador.split('-')[2]) 
    }

  })
  console.log(incorrects)
    incorrects.forEach(incorrecta => {
      document.getElementById('resultado').innerHTML += 'Nº de Pregunta: '+ incorrecta.substring(0,incorrecta.length -1) + ' , Respuesta: ' + incorrecta.substring(incorrecta.length-1,incorrecta.length) + '  ||  '
    })
    document.body.scrollIntoView({ behavior: 'auto', block: 'end' });

  
}