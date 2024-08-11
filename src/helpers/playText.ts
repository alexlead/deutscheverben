export const playText = (text: string, lang: string = "de-DE") => {

    try {

        if ('speechSynthesis' in window) {

            const synthesis: SpeechSynthesis = window.speechSynthesis;
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = synthesis.getVoices().filter((item) => item.lang.includes(lang))[0]; // select First Language Voice
            utterance.lang = utterance.voice.lang;
            synthesis.speak(utterance);
        }
    } catch (error) {
        console.log(error)
    }
} 