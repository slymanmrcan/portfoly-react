import GithubProjects from "../components/githubProjectComponent"
export default function Bussines() {
    return (
        <div id="works" className="s-works target-div">
                <div className="row works-portfolio">
                    <div className="column lg-12" data-animate-block>
                        <h2 className="text-pretitle" data-animate-el>
                            Son Çalışmalarım
                        </h2>
                        <p className="h1" data-animate-el>
                            Burada benim sevdğim projelerimden bazılarını inceleyebilirsin.
                        </p>
                        <ul className="folio-list row block-lg-one-half block-stack-on-1000">
                            
                            <GithubProjects />
                        </ul>
                    </div>
                </div> 
            </div>
    )
}