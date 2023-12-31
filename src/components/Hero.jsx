import { logo } from "../assets";

const Hero = () => {
	return (
		<>
			<header className="w-full justify-center items-center flex-col">
				<nav className="flex justify-between items-center w-full mb-10 pt-3">
					<img src={logo} alt="app logo" className="w-28 object-contain" />

					<button
						type="button"
						onClick={() =>
							window.open("https://github.com/qefiney/Article-Summerizer")
						}
						className="black_btn">
						Github
					</button>
				</nav>

				<h1 className="head_text">
					Summarize Articles with <br className="max-md:hidden" />
					<span className="blue_gradient">OpenAI GPT-4</span>
				</h1>

				<h2 className="desc">
					Make your reading short and simple with Sumz, an open-source article
					summarizer that transforms lengthy article into clear and concise
					summaries.
				</h2>
			</header>
		</>
	);
};

export default Hero;
