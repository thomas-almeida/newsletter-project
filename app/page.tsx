"use client";

import { useState, useRef } from "react";

// Extend Window interface for SpeechRecognition types
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

// Define SpeechRecognition type
type SpeechRecognition = typeof window.webkitSpeechRecognition;

export default function Home() {
  const [transcription, setTranscription] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const recognitionRef = useRef<any>(null);

  const handleToggleRecording = () => {
    if (isRecording) {
      recognitionRef.current.stop();
      setIsRecording(false);
    } else {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        interface SpeechRecognitionEventResult {
          [index: number]: SpeechRecognitionAlternative;
          isFinal: boolean;
        }

        interface SpeechRecognitionAlternative {
          transcript: string;
          confidence: number;
        }

        interface SpeechRecognitionEvent {
          results: SpeechRecognitionEventResult[];
        }

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = Array.from(event.results)
            .map((result: SpeechRecognitionEventResult) => result[0])
            .map((result: SpeechRecognitionAlternative) => result.transcript)
            .join("");
          setTranscription(transcript);
        };
        recognition.start();
        recognitionRef.current = recognition;
        setIsRecording(true);
      } else {
        alert("Speech recognition not supported in this browser.");
      }
    }
  };

  return (
    <>
      <div className="border flex justify-center items-center w-full overflow-y-auto">
        <div className="w-[90%]">
          <div
            contentEditable={transcription.length > 0}
            className="my-12 mx-auto text-md outline-none text-justify text-slate-500 italic h-[35vh] overflow-y-auto"
          >
            {transcription.length <= 0 ? "Hoje foi..." : transcription}
          </div>
          <span className="">
            <button
              className={`text-white px-4 py-2 rounded w-full mx-auto text-xl aboslute bottom-0 ${
                isRecording ? "bg-red-500" : "bg-slate-500"
              }`}
              onClick={handleToggleRecording}
            >
              {isRecording ? "Parar de Gravar" : "Gravar Dia"}
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
