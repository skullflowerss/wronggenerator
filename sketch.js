let text1, text2;
let text3 = "The fifty mannequin heads floating in the pool kind of freaked them out"

let markov, sentences, rm;

let input1, input2;
let label1, label2;

let button;

let element = 0;
let pMaker;
function setup(){
  select('main').remove()
  noCanvas();
  input1 = createInput()
  input2 = createInput()
  
  let form = document.getElementById("text")
  
  let t1 = createDiv()
  
  label1 = createSpan("text 1")
  label1.parent(t1)
  input1.parent(t1)
  t1.id("inpt")
  t1.parent(form)

  let t2 = createDiv()

  label2 = createSpan("text 2")
  label2.parent(t2)
  input2.parent(t2)
  t2.id("inpt")
  t2.parent(form)

  button = createButton("send")
  button.parent(form)
  button.mousePressed(stringMoment)

}

function stringMoment(){

  if(element > 0){
    let remover = document.getElementById("wordCont")
    remover.remove()
  }

  text1 = input1.value();
  text2 = input2.value();
  let fullText = text1+text2;

  rm = RiTa.markov(2, options ={
    disableInputChecks: true,
    maxAttempts: 100
  });
  
  rm.addText(text1);
  rm.addText(text2);

  
  sentences = rm.generate(5);
  let conter = createDiv()
  conter.id("wordCont")
  let selector = document.getElementById("words")
  for(let i = 0; i < sentences.length; i++){
    pMaker = createP(sentences[i])
    pMaker.parent(conter)
  }
  

  
  pMaker.id("wordGenerated")
  conter.parent(selector)
  element++;
}


