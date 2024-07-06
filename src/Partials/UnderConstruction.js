import 'boxicons';
const UnderConstruction = () => {
    return ( 
        <div className=" mt-60 flex items-center justify-center text-xl UnderConstruciton">
            <box-icon name='hard-hat'  size='60px' animation='burst' ></box-icon>

            {/* <i class='bx bx-hard-hat'> */}
             <h2 className="text-6xl m-20">Site Under <span className=" text-cyan-400">Construction</span></h2>
                
            {/* </i>/<FontAwesomeIcon icon={faConstruction} size="lg" /> */}
        </div>
     );
}
 
export default UnderConstruction;
{/* <box-icon name='hard-hat' type='solid' rotate='90' ></box-icon> */}
{/* <box-icon name='hard-hat'  ></box-icon> */}