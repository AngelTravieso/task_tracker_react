import { Link } from 'react-router-dom';

const About = () => {
	return(
		<div className='center'>
			<h4 className=''>Version 1.0.0</h4>
			<Link className='btn btn2' to='/'>Go Back</Link>
		</div>
	);
}

export default About