import  React from 'react';
import '../../bootstrap-4.1.3-dist/css/bootstrap.min.css';

class Header extends React.Component {

    render(){
	return(
	       <div className='header' >
                <center><h2 className="col-12 bg-warning">League Quiz App</h2></center>
	       </div>
	       );
   }

}

export default Header;