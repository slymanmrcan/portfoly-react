
import Image from "next/image";
const AboutPage = () => {
    return (
        <div>
            <div id="about" className="s-about target-div">
                <div className="row about-info wide" data-animate-block>
                    <div className="column lg-6 md-12 about-info__pic-block">
                        <Image width={400} height={400} src="/images/about-photo.jpg" alt="" />
                    </div>
                    <div className="column lg-6 md-12">
                        <div className="about-info__text" >
                            <h2 className="text-pretitle with-line" data-animate-el>
                                Ben Kimim
                            </h2>
                            <p className="attention-getter" data-animate-el>
                                Matematik bilgisayar bilimleri bölümünden mezun oldum
                                Backend Developer olarak çalışmalarımı sürdürüyorum.
                            </p>
                            <a href="/CV.pdf" download className="btn btn--medium u-fullwidth" data-animate-el>Download CV</a>
                        </div>
                    </div>
                </div>
                <div className="row about-expertise" data-animate-block>
                    <div className="column lg-12">
                        <h2 className="text-pretitle" data-animate-el>Uzmanlıklarım</h2>
                        <ul className="skills-list h1" data-animate-el>
                            <li>.Net Core</li>
                            <li>React</li>
                            <li>React Native</li>
                            <li>Devops</li>
                            <li>Linq</li>
                            <li>Ef Core</li>
                            <li>Dapper</li>
                            <li>Oracle Cloud</li>
                            <li>Azure Cloud</li>
                            <li>Docker</li>
                            <li>Tasarım Kalıpları</li>
                        </ul>
                    </div>
                </div>
                <div className="row about-timelines" data-animate-block>
                    <div className="column lg-6 tab-12">
                        <h2 className="text-pretitle" data-animate-el>
                            Tecrübe
                        </h2>
                        <div className="timeline" data-animate-el>
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">Anka Meşveret</h4>
                                    <h5 className="timeline__meta">Proje Bazlı Danışmanlık</h5>
                                    <p className="timeline__timeframe">2025 - </p>
                                </div>
                                <div className="timeline__desc">
                                    <p>Freelancer olarak proje bazlı geliştirme yapıyorum</p>
                                </div>
                            </div>
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">LOGİTİNG TEKNOLOJİ</h4>
                                    <h5 className="timeline__meta">Full Stack Developer </h5>
                                    <p className="timeline__timeframe">2021-2022</p>
                                </div>
                                <div className="timeline__desc">
                                    <p>Burada FullStack Developer olarak çalıştım</p>
                                </div>
                            </div>
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">Konya 3.Karayolları Bölge Müdürlüğü</h4>
                                    <h5 className="timeline__meta">Staj</h5>
                                    <p className="timeline__timeframe">2015</p>
                                </div>
                                <div className="timeline__desc">
                                    <p>Zorunlu stajımı burada bilgisayar teknolojieri alanında yaptım</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column lg-6 tab-12">
                        <h2 className="text-pretitle" data-animate-el>
                            Eğitim
                        </h2>
                        <div className="timeline" data-animate-el>
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">Necmettin Erbakan Üniversitesi</h4>
                                    <h5 className="timeline__meta">Matematik-Bilgisayar Bilimleri</h5>
                                    <p className="timeline__timeframe">2018-2021</p>
                                </div>
                                <div className="timeline__desc">
                                </div>
                            </div>
                            <div>
                                <div className="timeline__bullet"></div>
                            </div>
                            <div className="timeline__block">
                                <div className="timeline__bullet"></div>
                                <div className="timeline__header">
                                    <h4 className="timeline__title">Konya Teknik Üniversitesi</h4>
                                    <h5 className="timeline__meta">Bilgisayar Programcılığı</h5>
                                    <p className="timeline__timeframe">2015-2018</p>
                                </div>
                                <div className="timeline__desc">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;