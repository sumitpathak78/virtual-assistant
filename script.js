let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1


    text_speak.lang="hindi"

    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours >=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours < 16){
        speak("Good afternoon Sir")
    }
    else{
        speak("Good Evening Sir")
    }
}

window.addEventListener('load', ()=>{
    wishMe()
})




let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!speechRecognition) {
    alert("Sorry, Speech Recognition is not supported on this browser. Try using Chrome on Android.");
}



let recognition = new speechRecognition()
recognition.onresult = (event)=>{
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText= transcript

   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click", ()=>{
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})

function takeCommand(message){

     btn.style.display = "flex"
     voice.style.display = "none"
    if(message.includes("hello") || message.includes("hey") || message.includes("hey, jarvis") ||  message.includes("hi, jarvis")){
        speak("hello sir , what can i help you ?")
    }
    else if(message.includes("who are you")){
        speak("i am jarvis and i am virtual assistant , created by sumit sir ")
    }
    else if(message.includes("open youtube")){
        speak("opening youtube sir.....")
        window.open("https://www.youtube.com/","_blank")
    }

    else if(message.includes("open google")){
        speak("opening google sir.....")
        window.open("https://www.google.com/","_blank")
    }

    else if(message.includes("open facebook")){
        speak("opening facebook sir.....")
        window.open("https://www.facebook.com/","_blank")
    }

    else if(message.includes("open instagram")){
        speak("opening instagram sir.....")
        window.open("https://www.instagram.com/","_blank")
    }

    else if(message.includes("open calculator")){
        speak("opening calculator sir.....")
        window.open("calculator://")
    }

    else if(message.includes("open whatsapp")){
        speak("opening whatsapp sir.....")
        window.open("whatsapp://")
    }
    

    else if(message.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric", minute:"numeric"})

         speak(time)
    }

     else if(message.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric", month:"short"})

         speak(date)
    }  

    else if(message.includes("search on google")){
    let query = message
        .replace("jarvis", "")
        .replace("search on google", "")
        .trim()

    speak("Searching on Google for " + query)
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, "_blank")
}

    else{

        let finalText = "this is what i foung on internet regardig " + message.replace("jarvis","") || message.replace("javas","") || message.replace("ravis","")
        speak(finalText)
        window.open(`https://www.bing.com/search?qs= ${message.replace("jarvis","")}`,"_blank")
    }
}