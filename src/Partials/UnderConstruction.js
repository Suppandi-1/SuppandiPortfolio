import 'boxicons';
const UnderConstruction = () => {
    return ( 
        <div className="flex items-center justify-center text-xl UnderConstruciton">
            <box-icon name='hard-hat' className="w-12 h-12 text-5xl"></box-icon>
            
            {/* <i class='bx bx-hard-hat'> */}
             <h2 className="text-6xl m-36">Site Under <span className=" text-cyan-400">Construction</span></h2>
                
            {/* </i>/<FontAwesomeIcon icon={faConstruction} size="lg" /> */}
        </div>
     );
}
 
export default UnderConstruction;