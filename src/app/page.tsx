import CookieComponent from '@/components/atoms/cookie';
import CTA from '@/components/atoms/cta';
import ContactSection from '@/components/organisms/ContactSection';
import FeatureSection from '@/components/organisms/FeatureSection';
import HeroSection from '@/components/organisms/HeroSection';
import PlanSection from '@/components/organisms/PlanSection';
import ServiceSection from '@/components/organisms/ServiceSection';
import blog from '../../public/lotties/blogging.json';
import landingPage from '../../public/lotties/landindPage.json';
import site from '../../public/lotties/site.json';
import Divide from '@/components/atoms/divide';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative w-ful text-brand-neutral-50 ">
      <HeroSection />
      <FeatureSection
        key="blog"
        headline="Descubra Como Um Blog Empresarial Pode Conquistar e Fidelizar Clientes"
        text="Ter um blog empresarial é uma estratégia essencial para construir autoridade, envolver seu público-alvo e promover seus produtos ou serviços. Com conteúdo relevante e informativo, você atrai visitantes qualificados, aumenta a visibilidade da marca e fortalece a confiança do cliente"
        benefits={['Visibilidade', 'Autoridade', 'Engajamento']}
        lottie={blog}
      />
      <Divide />
	 
	 
      <FeatureSection
        key="LP"
        headline="Simplifique a Jornada do Cliente Com Landing Pages Otimizadas"
        text="Em um mercado altamente competitivo, uma landing page se destaca. Ela proporciona uma experiência personalizada que ressoa com seu público, criando confiança e aumentando as conversões. Com sua capacidade de direcionar o tráfego para a ação desejada, uma landing page é uma ferramenta indispensável para o sucesso do seu negócio online"
        benefits={['Relevância', 'Comunicação Direta', 'Geração de Receita']}
        lottie={landingPage}
        positionImage="left"
      />
	   <Divide />
      <FeatureSection
        key="site"
        headline="Conquiste Uma Presença Institucional Online que Gera Confiança"
        text="Destaque-se da concorrência com um site institucional bem projetado. Ele é a vitrine da sua marca, oferecendo um espaço exclusivo para exibir sua singularidade, destacar seus diferenciais e cativar seu público-alvo, criando uma impressão inesquecível"
        benefits={['Confiabilidade', 'Profissionalismo', 'Acessibilidade']}
        lottie={site}
      />

      <CTA />
      <ServiceSection />
      <PlanSection />
      <ContactSection />
      <CookieComponent />
    </main>
  );
}
