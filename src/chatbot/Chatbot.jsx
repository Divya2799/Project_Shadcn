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
    return (
        <Dialog>
            <form>
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
                  <div className="min-h-40 bg-gray-200">
                      <blockquote className="mt-6 border-l-2 pl-6 italic"> &quot;Hey User,&quot;  &quot;Here you'll get chat conversation.&quot; </blockquote>
                  </div>
                    <DialogFooter>
                        <div className="grid grid-cols-5 gap-2">
                            <Input id="name-1" name="name" className="col-span-4" placeholder="Ask your thoughts!" />
                            <Button variant="outline" className="cursor-pointer col-span-1">Ask</Button>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
};

export default Chatbot;
