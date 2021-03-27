import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Footer = () => {

	const location = useLocation();

	return(
		<>
			{ location.pathname === '/' && (
					<footer>
						<p>Copyright - Angel Travieso &copy;2021</p>
						<Link className='btn btn2' to='/about'>About</Link>
					</footer> ) }
		</>
		
	);
}

export default Footer;