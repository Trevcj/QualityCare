import { h, Component } from 'preact';
import style from './style';
import Fade from 'react-reveal/Fade';


export default class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			phone: '555-555-5555',
			year: new Date().getFullYear()
		};
	}
	
	render() {
		return (
			<div class={style.home}>
				<div class={`container-fluid ${style.mainTop}`}>
					<div class={`col ${style.topText}`}>
						<Fade>
							<div>
								<div class="row">
									<div class="col">
										<h1 class={`display-2 ${style.mainText}`}>Quality</h1>
										<p class={style.subText}>You can see.</p>
									</div>
								</div>
								<div class="row">
									<div class="col">
										<h1 class={`display-2 ${style.mainText}`}>Care</h1>
										<p class={style.subText}>You can trust.</p>
									</div>
								</div>
								<div class="row">
									<div class="col">
										<p class={style.subPhone}>Call Us</p>
										<a style="text-decoration-color: #da0201;" href="tel:+1-833-275-8859">
											<h1
												class="display-4" id={style.mainPhone}
											>
										(833) 275-8859
											</h1>
										</a>
									</div>
								</div>
							</div>
						</Fade>
					</div>
				</div>

				<div class="container">
					<div class={`col ${style.contentCol}`}>
						<div
							style="align-items: center;justify-content: center;"
							class="row"
						>
							<div class="col-md-5">
								<Fade left>
									<div>
										<img
											class={style.infoPic}
											alt="house"
											src="https://res.cloudinary.com/trevcj/image/upload/c_scale,w_400/v1567647639/apartment-cabinet-contemporary-2062426_h9kf6p.jpg"
											style="box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.5);"
										/>
									</div>
								</Fade>
							</div>
							<div class="col-md-7">
								<h2 class={style.pageHead}>Our Goal</h2>
								<p>
									To return your property to its original condition, before
									the water damage, in the quickest way possible while still
									maintaining our high level of quality control. At Quality
									Care Restoration, we’ve helped homeowners and business
									owners in Greater Cincinnati, Northern Kentucky, and
									SouthEast Indiana deals with their major water extraction
									and water damage needs.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<h2 class={style.pageHead}>Our Numbers</h2>
					<div class="row">
						<div class="col-6 col-md-4 col-lg">
							<div class={style.numSection}>
								<h5 class={style.numTitle}>Avg. Call Back</h5>
								<p
									class={style.numLg}
						
								>
						15min
								</p>
							</div>
						</div>
						<div class="col-6 col-md-4 col-lg">
							<div class={style.numSection}>
								<h5 class={style.numTitle}>Avg. Arrival</h5>
								<p
									class={style.numLg}
						
								>
						2Hrs
								</p>
							</div>
						</div>
						<div class="col-6 col-md-4 col-lg">
							<div class={style.numSection}>
								<h5 class={style.numTitle}>On Call</h5>
								<p
									class={style.numLg}
						
								>
						24/7
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class={`container-fluid ${style.botCont}`}>
					<div style="align-items: center;justify-content: center;padding: 10px;max-width: 1240px;margin: auto;" class="row">
						<div class="col-md-5 order-last order-md-0">
							<Fade left>
								<div>
									<img
										class={style.infoPic}
										alt="bath"
										src="https://res.cloudinary.com/trevcj/image/upload/c_scale,w_400/v1567647638/communication-contact-conversation-33999_dnaqdq.jpg"
									/>
								</div>
							</Fade>
						</div>
						<div class="col-md-7">
							<p style="font-size:1.3rem;">
									If you’ve experienced water damage from a flood, pipe burst,
									or sewer back up, you know that quick and experienced action
									is needed. Quality Care Restorations technicians are trained
									in the latest industry know-how under IICRC certifications,
									allowing us to deliver the latest in water extraction and
									drying techniques.
							</p>
						</div>
					</div>
					<div
						style="align-items: center;justify-content: center;margin: auto;"
						class="row text-center"
					>
						<div class="col">
							<div>
								<h1
									style="text-align: center;margin: 1rem auto;color:white;"
									class={style.pageHead}
								>
									Give us a call
								</h1>
								<a style="text-decoration-color: #FFFFFF;" href="tel:+1-833-275-8859">
									<h1
										style="text-align: center;margin: 1rem auto;color:white;"
										class={style.pageHead}
									>
										(833) 275-8859
									</h1>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div style="color: #FFFFFF;font-size: 1.7rem;padding: 1.2rem;background-color: #DA0201;	margin-top: -1px;">
					<h5 style="text-align: center;margin: auto;">Restorioai &copy; {this.state.year}</h5>
				</div>
			</div>
		);
	}
}
