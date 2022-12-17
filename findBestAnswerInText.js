let optionsTxt="Its overall effects require further evaluation.In the future, it will be used to cure mental illness and drug addiction.It is not useful for people who are already able to interpret social cues.Its effects on the brain are unknown.It is more effective when dosed via nasal spray than orally.";

let optArrTemp=optionsTxt.split('.');
optionArr=optArrTemp.filter(elm=>elm);

let textArr=[];
for(let m=0; m<optionArr.length; m++){
  textArr[m]=optionArr[m].split(' ');
  
  console.log(textArr[m].filter(noTheWords));
}

function noTheWords(word){
  if(['the','in'].includes(word.toLowerCase()))
    return false;
  else
    return true;
}

// console.log(noTheWords('The'));
//let textArr=option.split(" ");
let input="Most mental health disorders and cases of drug abuse tend to diminish a person's ability to recognize other people's feelings. A recent study in Norway suggests, however, that these effects can be bolstered by a nasal spray puff of the brain hormone oxytocin, which is known to increase feelings of calm and social bonding. Although oxytocin is already prescribed for certain disorders that affect social function, such as autism, these treatments are often tried in isolated cases, leaving the overall effects of the drug without evaluation. The Norwegian experiment focused on 40 students, each of whom was given either a control dose of salt water or the drug oxytocin. After the nasal dose, the students were shown faces of happy, angry, or neutral expressions, some of which were subtler than others. The researchers found that after a nasal spray dose of oxytocin, the students' awareness of the expressions was intensified. Further, the experiment showed that oxytocin had the greatest effect on those who were least able to evaluate emotions properly when given the control. Although the results of this study seem promising, Leknes, the lead scientist in the investigation, cautions that the hormone would not be a 'cure-all' for mental illness or drug addiction. Rather, he suggests, the hormone might help some individuals better interpret the social cues from the world around them.";
var paragraphs = input.split('.');
let paragraphsArr=[];
let match=[0];

for(let i=0; i<paragraphs.length; i++){
    paragraphsArr[i]=paragraphs[i].split(' ');
}

for(let x=0; x<paragraphsArr.length;x++){
  for(let y=0; y< paragraphsArr[x].length;y++){
     for(let z=0; z<textArr.length; z++){
       for(let h=0;h<textArr[z].length;h++){
        if(textArr[z][h]==paragraphsArr[x][y]){
          if(match[z]!=null)
            match[z]+=1;
          else
            match[z]=1;
        }
       }
     }
  }
}
let max= Math.max(...match);
let index= match.indexOf(max);
console.log(optionArr[index]);




// // option is the one of multiple choice options for a question 
// let option="Its overall effects require further evaluation";
// let textArr=option.split(" ");

// // input is the text to find matches in
// let input="Most mental health disorders and cases of drug abuse tend to diminish a person's ability to recognize other people's feelings. A recent study in Norway suggests, however, that these effects can be bolstered by a nasal spray puff of the brain hormone oxytocin, which is known to increase feelings of calm and social bonding. Although oxytocin is already prescribed for certain disorders that affect social function, such as autism, these treatments are often tried in isolated cases, leaving the overall effects of the drug without evaluation. The Norwegian experiment focused on 40 students, each of whom was given either a control dose of salt water or the drug oxytocin. After the nasal dose, the students were shown faces of happy, angry, or neutral expressions, some of which were subtler than others. The researchers found that after a nasal spray dose of oxytocin, the students' awareness of the expressions was intensified. Further, the experiment showed that oxytocin had the greatest effect on those who were least able to evaluate emotions properly when given the control. Although the results of this study seem promising, Leknes, the lead scientist in the investigation, cautions that the hormone would not be a 'cure-all' for mental illness or drug addiction. Rather, he suggests, the hormone might help some individuals better interpret the social cues from the world around them.";

// // input to paragraphs
// var paragraphs = input.split('.');
// let paragraphsArr=[];
// let match=[0];

// for(let i=0; i<paragraphs.length; i++){
//     paragraphsArr[i]=paragraphs[i].split(' ');
// }

// for(let x=0; x<paragraphsArr.length;x++){
//   for(let y=0; y< paragraphsArr[x].length;y++){
//      for(let z=0; z<textArr.length; z++){
//         if(textArr[z]==paragraphsArr[x][y]){
//           if(match[x]!=null)
//             match[x]+=1;
//           else
//             match[x]=1;
//         }
//      }
//   }
// }
// let max= Math.max(...match);
// let index= match.indexOf(max);
// console.log(paragraphs[index]);


