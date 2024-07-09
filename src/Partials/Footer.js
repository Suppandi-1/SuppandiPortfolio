import 'boxicons';
function Footer() {
  return (
      <footer className="bg-black bg-opacity-40 md:bg-opacity-0
       border-2 border-solid border-[#39ff14] md:border-none 
       text-xs md:text-sm 
       absolute bottom-0 m-0 lg:m-1
       justify-center md:justify-normal md:right-0
       h-fit w-fit
       px-2">
        
        <div class="footer-copy  p-0 md:p-1 flex ">
            <p className="p-0">

            <a className=" p-0 md:p-1 " target="_blank" href="mailto:suthar.d@outlook.com">Email </a>
            <a href="https://github.com/devesh-daku">
            <box-icon name='copyright' color='white' size='.75rem'></box-icon> 2024 Devesh Kumar Suthar. All Rights Reserved.
            </a>
            </p>
        </div>
    </footer>

    
  );
}
export default Footer;
