import React from 'react'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='py-5 bg-sky-900 text-white'>

      <footer className='flex flex-col gap-10'>
        <div className='flex justify-around'>
          <div>
            <h4 className="font-bold text-xl">Company</h4>
            <ul>
              <Link to="about">About Us</Link>
              <Link to="about">Why Choose Us</Link>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div >
            <h4 className="font-bold text-xl">Resources</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Condition</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div >
            <h4 className="font-bold text-xl">Product</h4>
            <ul>
              <li><a href="#">Sample Texty</a></li>
              <li><a href="#">Sample Texty</a></li>
              <li><a href="#">Sample Texty</a></li>
              <li><a href="#">Sample Texty</a></li>
            </ul>
          </div>
          <div >
            <h4 className="font-bold text-xl"> Eternatek </h4>
            <p>Subscribe to Your </p>
            <form className="flex gap-3">
              <input type="email" placeholder="Enter your Email" required className='border p-2 rounded-md outline-none' />
              {/* <button type="submit">Subscribe</button> */}
              <Button variant="spl" size="lg">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className=''>
          <div class="flex flex-col items-center">
            <p className="font-bold text-xl">Copyright ©2025</p>
            <hr />
            <div className="flex gap-5">
              <a href="#" aria-label="Facebook"><img src="https://img.icons8.com/color/48/facebook.png" alt="Facebook" /></a>
              <a href="#" aria-label="Twitter"><img src="https://img.icons8.com/color/48/twitter.png" alt="Twitter" /></a>
              <a href="#" aria-label="Instagram"><img src="https://img.icons8.com/color/48/instagram-new.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer


