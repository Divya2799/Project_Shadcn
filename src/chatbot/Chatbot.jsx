import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const generateAnswer = async (e) => {
    e.preventDefault();
    const currentQuestion = question.trim();
    if (!currentQuestion) return;
    setGeneratingAnswer(true);
    setChatHistory((prev) => [...prev, { type: "question", content: currentQuestion }]);
    setQuestion("");
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAX4twBRL8Tr65fsTQjr8Dq3gL-Zs2Hxy4",
        {
          contents: [{ parts: [{ text: currentQuestion }] }],
        }
      );
      const aiResponse = response.data.candidates?.[0]?.content?.parts?.[0]?.text || "No response found.";
      setChatHistory((prev) => [...prev, { type: "answer", content: aiResponse }]);
    } catch (error) {
      console.error(error);
      setChatHistory((prev) => [
        ...prev,
        { type: "answer", content: "Sorry! Something went wrong. Try again!" },
      ]);
    }
    setGeneratingAnswer(false);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <div className="div">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3649/3649460.png"
            className="w-18 border-3 border-black rounded-full p-1 bg-purple-300 cursor-pointer fixed bottom-5 right-5 z-50"
            alt="Chatbot Icon"
          />
        </div> */}

        <div className="fixed bottom-5 right-5 z-50 group">
       
        <div className="relative animate-bounce">
         
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          
          
          <div className="relative">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3649/3649460.png"
              className="w-16 h-16 border-4 border-white rounded-full p-2 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 cursor-pointer shadow-2xl transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-purple-500/50 active:scale-95"
              alt="Chatbot Icon"
            />
            
          
          </div>
          
          
          <div className="absolute inset-0 rounded-full border-2 border-purple-400 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 rounded-full border-2 border-blue-400 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700 ease-out animation-delay-150"></div>
        </div>
        </div>

      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl">ChatBot</DialogTitle>
          <DialogDescription>
            <p className="text-xs">Best ChatBot Ever! Anything you ask me I'll be there for you.</p>
          </DialogDescription>
        </DialogHeader>
        <div
          className="flex-1 max-h-[400px] overflow-y-auto px-4 py-2 bg-gray-100 scrollbar-thin"
          ref={chatContainerRef}
        >
          {chatHistory.length === 0 ? (
            <div>Ask me something, I'll respond!</div>
          ) : (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`my-2 ${chat.type === "question" ? "text-right" : "text-left"
                  }`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded text-sm ${chat.type === "question"
                    ? "bg-red-400 text-white rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                >
                  <ReactMarkdown>{chat.content}</ReactMarkdown>
                </div>
              </div>
            ))
          )}

          {generatingAnswer && (
            <div className="text-left mt-2">
              <div className="inline-block bg-gray-100 p-3 rounded animate-pulse">
                Generating...
              </div>
            </div>
          )}
        </div>
        <DialogFooter>
          <form onSubmit={generateAnswer} className="w-full">
            <div className="flex gap-2">
              <textarea
                name="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Ask anything!"
                className="border h-10 flex-1 rounded px-2 py-1 resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    generateAnswer(e);
                  }
                }}
              ></textarea>
              <Button
                variant="outline"
                type="submit"
                disabled={generatingAnswer}
                className="px-4 py-3 text-md"
              >
                Ask!
              </Button>
            </div>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Chatbot;
