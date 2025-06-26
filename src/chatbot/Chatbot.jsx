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

  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [generatingAnswer, setGeneratingAnswer] = useState(false);



  console.log(chatHistory, "chatHistory")


  const chatContainerRef = useRef(null);


   useEffect(()=>{
    if(chatContainerRef.current){
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
   },[chatHistory, generateAnswer])

  console.log(chatContainerRef,"chatContainerReference")
  async function generateAnswer(e) {
    e.preventDefault();

    if (!question.trim()) return;

    setGeneratingAnswer(true);

    const currentQuestion = question;

   

    setChatHistory((prev) => [...prev, { type: "question", content: currentQuestion }]);

    try {
      const response = await axios(
        {
          url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAX4twBRL8Tr65fsTQjr8Dq3gL-Zs2Hxy4",
          method: "post",
          data: {
            contents: [{ parts: [{ text: currentQuestion }] }]
          }
        });

      const aiResponse = response.data.candidates[0].content.parts[0].text;
      setChatHistory((prev) => [...prev, { type: "answer", content: aiResponse }])
      setAnswer(aiResponse);
    }
    catch (error) {
      console.log(error);
      setAnswer("Sorry! - Something went wromg, Try Again!")
    }
    setGeneratingAnswer(false)
     setQuestion("")
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="div">
          <img src="https://cdn-icons-png.flaticon.com/128/3649/3649460.png" className='w-18 border-3 border-black rounded-full p-1 bg-purple-300 cursor-pointer fixed bottom-5 right-5 z-99' alt="" />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>ChatBot</DialogTitle>
          <DialogDescription>
            Ask your questions! I am there to help you out.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 max-h-[400px] overflow-y-auto px-4 py-2" ref={chatContainerRef}>
        {
          chatHistory.length === 0 ? (
            <div>
              Ask me Something!, I'll give you the best response.
            </div>
          ):(
            chatHistory.map((chat,index)=>(
              <div key={index}
              className={`my-2 ${chat.type === "question" ? "text-right" : "text-left"}`}
              >
                <div className={`inline-block max-w-[80%] p-3 rounded text-sm ${
                  chat.type === 'question' ? "bg-red-400 text-white rounded-br-none"
                  : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}>
                  <ReactMarkdown>{chat.content}</ReactMarkdown>
                </div>
              </div>
            ))
          )}
          {
            generatingAnswer && (
              <div>
                <div className="text-left mt-2">
                  <div className="inline-block bg-gray-100 p-3 rounded animate-pulse">
                    Generating....
                  </div>
                </div>
              </div>
            )
          }
        </div>
        <DialogFooter>
          <form onSubmit={generateAnswer}>
            <div className="flex gap-3">
              <textarea name="question" id="" placeholder="Ask Anything!" onChange={(event) => setQuestion(event.target.value)}

                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    generateAnswer(e)
                  }
                }}

              ></textarea>
              <Button type="submit" className={`px-4 py-2 text-md ${generatingAnswer ? "opacity-50 cursor-not-allowed" : ""}`} >Ask!</Button>
            </div>
          </form>
        </DialogFooter>
      </DialogContent>

    </Dialog>
  )
};

export default Chatbot;