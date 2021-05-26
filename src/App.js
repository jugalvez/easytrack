import { useState } from 'react'
import Main from './layout/Main'
import ProfileContext, { Profile } from './context/ProfileContext'

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
	const profileState = useState(Profile) 

  	return (
  		<ProfileContext.Provider value={profileState}>
	    	<div className="App">
	        	<Main />
	    	</div>
    	</ProfileContext.Provider>
  	);
}

export default App;