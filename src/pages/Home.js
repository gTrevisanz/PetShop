import React from "react";
import Servico from "../components/Servico";
import BanhoTosa from "../imagens/imagens-banho-e-tosa/banho-tosa.jpg";
import VacinaCachorro from "../imagens/imagens-banho-e-tosa/vacina-cachorro.jpg";
import Adestramento from "../imagens/adestramento.jpg"
import Festa from "../imagens/pagina-home/hotel-para-cachorros.jpg"
import Banner from "../components/Banner"
import tituloSection from "../components/tituloSection";

const Home = () => {
	return (
		<div>
			<Banner />
			<section className='section d-flex py-5'>
			<Servico 
			imagemServico={BanhoTosa}
			tituloImagem="Banho e Tosa para Pets"
			tituloServico="Banho e Tosa"
			/>
			<Servico 
			imagemServico={VacinaCachorro}
			tituloImagem="Banho e Tosa para Pets"
			tituloServico="Pet care"
			/>
			<Servico 
			imagemServico={Adestramento}
			tituloImagem="Banho e Tosa para Pets"
			tituloServico="Adestramento"
			/>
			<Servico 
			imagemServico={Festa}
			tituloImagem="Banho e Tosa para Pets"
			tituloServico="Hotel Resort"
			/>
			</section>
			<tituloSection/>
		</div>
	);
};

export default Home;
