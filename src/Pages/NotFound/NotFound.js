import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    
      <div className='not-found'>
<div>
<h3>Error 404</h3>
<h3> Oops! The page you're looking for isn't here.</h3>
<p>You might have the wrong address, or the page may have moved.</p>
<Link className='backhome' to='/'>Back To Home</Link>
      </div>
      <div>
      <img
              src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''
            />
      </div>
    </div>

  );
};

export default NotFound;