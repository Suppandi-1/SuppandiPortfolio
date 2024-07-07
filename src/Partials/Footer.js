function Footer() {
  return (
      <footer className=" text-xs md:text-sm absolute bottom-0  m-1  justify-center md:right-0">
        <div class="footer-container flex justify-center items-center flex-row">
        <div class="footer-social ">
            <a className="p-1" target="_blank" href="mailto:suthar.d@outlook.com">Email</a>
            {/* <a className="p-2" target="_blank" href="https://www.linkedin.com/in/devesh-suthar-/" target="_blank">LinkedIn</a> */}
            {/* <a className="p-2" target="_blank" href="https://x.com/DeveshDaku" target="_blank">Twitter</a> */}
            {/* <a className="p-2" target="_blank" href="https://www.instagram.com/devesh__s/" target="_blank">Instagram</a> */}
            {/* <a className="p-2" target="_blank" href="https://github.com/Devesh-Daku" target="_blank">GitHub</a> */}
        </div>
        <div class="footer-copy p-1">
            <p> <b className= "text-xl ">©</b> 2024 Devesh Kumar Suthar. All Rights Reserved.</p>
        </div>
        </div>
    </footer>

    
  );
}
export default Footer;
