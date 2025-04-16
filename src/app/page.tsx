
export default function Home() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
              <div id="intro" className="s-intro target-section">
                  <div className="row intro-content wide">
                      <div className="column">
                          <div className="text-pretitle with-line">
                              Hello World
                          </div>
                          <h1 className="text-huge-title">
                              Ben Süleyman, <br/>
                              FullStack <br/>
                              Web <br/> 
                              Geliştiriciyim <br/>
                              
                          </h1>
                      </div>
                      <ul className="intro-social">
                          <li><a target="blank" href="https://github.com/slymanmrcan">Github</a></li>
                          <li><a target="blank" href="https://twitter.com/slymanmrcan">Twitter</a></li>
                          <li><a target="blank" href="https://linkedin.com/in/slymanmrcan">linkedin</a></li>
                          <li><a target="blank" href="https://instagram.com">Instagram</a></li>
                      </ul>
                  </div> 
                  {/* <a href="#about" className="intro-scrolldown smoothscroll">
                      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/></svg>
                  </a> */}
              </div>
        </main>
      </div>
    );
  }
  