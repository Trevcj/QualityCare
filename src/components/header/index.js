import { h } from 'preact';
import Plus from '../../assets/Plus.js';
import style from './style';


const Header = () => (
	<div class={style.header}>
		<nav style="justify-content:center;" class="navbar navbar-light">
			<div><Plus /></div>
			<div>Quality Care Restoration</div>
		</nav>
		
	</div>
);

export default Header;
