// import React from 'react'
// import { Button } from "@/components/ui/button"
// import {
//     Dialog,
//     DialogClose,
//     DialogContent,
//     DialogDescription,
//     DialogFooter,
//     DialogHeader,
//     DialogTitle,
//     DialogTrigger,
// } from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { useState, useRef, useEffect } from "react";
// import "./App.css";
// import axios from "axios";
// import ReactMarkdown from "react-markdown";

// const Chatbot = () => {
//     return (
//         <Dialog>
//             <form>
//                 <DialogTrigger asChild>
//                     <div className="div">
//                            <img src="https://cdn-icons-png.flaticon.com/128/3649/3649460.png" className='w-10 cursor-pointer fixed bottom-5 right-5 z-99' alt="" />
//                     </div>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px] bg-white">
//                     <DialogHeader>
//                         <DialogTitle>ChatBot</DialogTitle>
//                         <DialogDescription>
//                             Ask your questions! I am there to help you out.
//                         </DialogDescription>
//                     </DialogHeader>
//                   <div className="min-h-40 bg-gray-200">
//                       <blockquote className="mt-6 border-l-2 pl-6 italic"> &quot;Hey User,&quot;  &quot;Here you'll get chat conversation.&quot; </blockquote>
//                   </div>
//                     <DialogFooter>
//                         <div className="grid grid-cols-5 gap-2">
//                             <Input id="name-1" name="name" className="col-span-4" placeholder="Ask your thoughts!" />
//                             <Button variant="outline" className="cursor-pointer col-span-1">Ask</Button>
//                         </div>
//                     </DialogFooter>
//                 </DialogContent>
//             </form>
//         </Dialog>
//     )
// }

// export default Chatbot
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [generatingAnswer, setGeneratingAnswer] = useState(false);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, generatingAnswer]);

  async function generateAnswer(e) {
    e.preventDefault();
    if (!question.trim()) return;

    setGeneratingAnswer(true);
    const currentQuestion = question;
    setQuestion("");

    setChatHistory((prev) => [...prev, { type: "question", content: currentQuestion }]);

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAX4twBRL8Tr65fsTQjr8Dq3gL-Zs2Hxy4",
        method: "post",
        data: {
          contents: [{ parts: [{ text: currentQuestion }] }],
        },
      });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [...prev, { type: "answer", content: aiResponse }]);
      setAnswer(aiResponse);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry - Something went wrong. Please try again!");
    }
    setGeneratingAnswer(false);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/128/3649/3649460.png"
            className="w-10 cursor-pointer fixed bottom-5 right-5 z-50"
            alt="Chatbot Icon"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px] bg-white p-0 overflow-hidden">
        <DialogHeader className="px-4 pt-4">
          <DialogTitle className="text-xl">ChatBot</DialogTitle>
          <DialogDescription>Ask your questions! I’m here to help you out.</DialogDescription>
        </DialogHeader>

        <div
          ref={chatContainerRef}
          className="flex-1 max-h-[300px] overflow-y-auto px-4 py-2 scrollbar-thin"
        >
          {chatHistory.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              Ask me anything, and I’ll respond with the best I can!
            </div>
          ) : (
            chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-3 ${chat.type === "question" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block max-w-[80%] p-3 rounded-lg text-sm ${
                    chat.type === "question"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  <ReactMarkdown>{chat.content}</ReactMarkdown>
                </div>
              </div>
            ))
          )}
          {generatingAnswer && (
            <div className="text-left mt-2">
              <div className="inline-block bg-gray-100 p-3 rounded-lg animate-pulse">
                Thinking...
              </div>
            </div>
          )}
        </div>

        <form onSubmit={generateAnswer} className="bg-white p-4 border-t">
          <div className="flex gap-2">
            <textarea
              required
              className="flex-1 border border-gray-300 rounded p-2 resize-none text-sm focus:ring-1 focus:ring-blue-400"
              placeholder="Ask anything..."
              value={question}
              rows={2}
              onChange={(e) => setQuestion(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  generateAnswer(e);
                }
              }}
            ></textarea>
            <Button
              type="submit"
              className={`px-4 py-2 text-sm ${
                generatingAnswer ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={generatingAnswer}
            >
              Send
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default Chatbot;
