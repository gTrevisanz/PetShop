import React from "react";
import Servico from "../components/Servico";
import imagemBanhoTosa from "../imagens/imagens-banho-e-tosa/banho-tosa.jpg";
import VacinaCachorro from "../imagens/imagens-banho-e-tosa/vacina-cachorro.jpg";
import Adestramento from "../imagens/adestramento.jpg";
import Festa from "../imagens/pagina-home/hotel-para-cachorros.jpg";
import Banner from "../components/Banner";
import TituloSection from "../components/TituloSection";
import Cliente from "../components/Cliente";

const Home = () => {
	return (
		<div>
			<Banner />
			<section className='section d-flex py-5'>
				<Servico 
					imagemServico={imagemBanhoTosa}
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
			<TituloSection />

			<Cliente
			tituloCliente= "Relação com o cliente"
			SubtituloCliente= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eum porro, deleniti asperiores, ipsa error quod, fugiat voluptate earum aut voluptatibus illum repellat. Fugiat delectus quis quasi dolorem, aspernatur molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, totam? Odit corrupti expedita voluptas illum et necessitatibus, quasi deserunt culpa rem esse amet fugit suscipit, eos recusandae maiores id illo."
			
			/>
		</div>
	);
};

export default Home;
