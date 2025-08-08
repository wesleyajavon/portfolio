import FadeInOnScroll from "./utils/FadeInOnScroll";

export default function Hero() {
    return (
        <FadeInOnScroll className="text-center">
            <section 
              id="hero" 
              className="w-full py-50 bg-[url('/public/background-Hero.png')] bg-[30%_100%] bg-no-repeat bg-cover"
            >
              {/* Ton contenu ici */}
            </section>
        </FadeInOnScroll>
    );
}