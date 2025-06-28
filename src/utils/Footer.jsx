import React from 'react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (


    <div className="py-5 bg-sky-900 text-white">
  <footer className="flex flex-col gap-10">
    
   
    <div className="flex flex-col gap-8 md:flex-row md:justify-around md:items-start text-center md:text-left">
  
      <div>
        <h4 className="font-bold text-xl mb-2">Company</h4>
        <ul className="space-y-1">
          <li><Link to="about">About Us</Link></li>
          <li><Link to="about">Why Choose Us</Link></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-xl mb-2">Resources</h4>
        <ul className="space-y-1">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms and Condition</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>

    
      <div>
        <h4 className="font-bold text-xl mb-2">Product</h4>
        <ul className="space-y-1">
          <li><a href="#">Sample Texty</a></li>
          <li><a href="#">Sample Texty</a></li>
          <li><a href="#">Sample Texty</a></li>
          <li><a href="#">Sample Texty</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold text-xl mb-2">Eternatek</h4>
        <p>Subscribe to your newsletter</p>
        <form className="flex flex-col sm:flex-row sm:justify-center sm:items-center gap-3 mt-3">
          <input
            type="email"
            placeholder="Enter your Email"
            required
            className="border p-2 rounded-md outline-none text-black w-full sm:w-auto"
          />
          <Button variant="spl" size="md">Subscribe</Button>
        </form>
      </div>
    </div>

    
    <div>
      <div className="flex flex-col items-center gap-3">
        <p className="font-bold text-xl">Copyright ©2025</p>
        <hr className="w-full border-gray-300" />
        <div className="flex gap-5">
          <a href="#" aria-label="Facebook">
            <img src="https://img.icons8.com/color/48/facebook.png" alt="Facebook" />
          </a>
          <a href="#" aria-label="Twitter">
            <img src="https://img.icons8.com/color/48/twitter.png" alt="Twitter" />
          </a>
          <a href="#" aria-label="Instagram">
            <img src="https://img.icons8.com/color/48/instagram-new.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>

  </footer>
</div>

  )
}

export default Footer


