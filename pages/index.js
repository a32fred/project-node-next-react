import Head from "next/head";
import Script from "next/script";

function Home() {

    return (
        <div>
            <Head>
                <meta charSet="UTF-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"/>
                <title>Celke - Site Imersao 11</title>
            </Head>

        <nav className="navbar">
            <div className="max-width">
                <div className="logo">
                    <a href="#top">Celke</a>
                </div>
                <ul className="menu">
                    <li><a href="#top" className="menu-btn">Home</a></li>
                    <li><a href="#services" className="menu-btn">Serviços</a></li>
                    <li><a href="#contact" className="menu-btn">Contato</a></li>
                </ul>
                <div className="menu-btn">
                    <i className="fas fa-bars"></i>
                </div>
            </div>
        </nav>

        <section class="top" id="top">
            <div class="max-width">
                <div class="top-content">
                    <div class="text-1">Temos a solução</div>
                    <div class="text-2">que a sua empresa precisa</div>
                    <div class="text-3">Podemos ajudar a sua empresa!</div>
                    <a href="#">Entrar em Contato</a>
                </div>
            </div>
        </section>

        <section class="services" id="services">
            <div class="max-width">
                <h2 class="title">Serviços</h2>
                <div class="serv-content">
                    <div class="card">
                        <div class="box">
                            <i class="fas fa-code"></i>
                            <div class="text">
                                Serviço 1
                            </div>
                            <p>Aenean consectetur feugiat eros at aliquet. Integer ac nisi dui. Nam maximus nunc non aliquet aliquet.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <i class="fas fa-laptop-code"></i>
                            <div class="text">
                                Serviço 2
                            </div>
                            <p>Aenean consectetur feugiat eros at aliquet. Integer ac nisi dui. Nam maximus nunc non aliquet aliquet.</p>
                        </div>
                    </div>

                    <div class="card">
                        <div class="box">
                            <i class="fas fa-mobile-alt"></i>
                            <div class="text">
                                Serviço 3
                            </div>
                            <p>Aenean consectetur feugiat eros at aliquet. Integer ac nisi dui. Nam maximus nunc non aliquet aliquet.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="contact" id="contact">
            <div class="max-width">
                <h2 class="title">Contato</h2>
                <div class="contact-content">
                    <div class="column left">
                        <p>Aliquam facilisis vitae ante eu consequat. Nullam a mi vel metus tristique commodo id quis diam.</p>
                        <div class="icons">
                            <div class="row">
                                <i class="fas fa-user"></i>
                                <div class="info">
                                    <div class="head">Empresa</div>
                                    <div class="sub-title">Celke</div>
                                </div>
                            </div>

                            <div class="row">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="info">
                                    <div class="head">Endereço</div>
                                    <div class="sub-title">Avenida Winston Churchill</div>
                                </div>
                            </div>

                            <div class="row">
                                <i class="fas fa-envelope"></i>
                                <div class="info">
                                    <div class="head">E-mail</div>
                                    <div class="sub-title">cesar@celke.com.br</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column right">
                        <div class="text">Mensagem de Contato</div>
                        <form>
                            <div class="fields">
                                <div class="field name">
                                    <input type="text" placeholder="Digite o nome" required/>
                                </div>
                                <div class="field email">
                                    <input type="email" placeholder="Digite o e-mail" required/>
                                </div>
                            </div>

                            <div class="field">
                                <input type="text" placeholder="Digite o assunto" required/>
                            </div>

                            <div class="field textarea">
                                <textarea cols="30" rows="10" placeholder="Digite o conteúdo" required></textarea>
                            </div>

                            <div class="button-area">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <footer>
            <span>Create By <a  href="#">Celke</a></span>
        </footer>

        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" strategy="beforeInteractive"></Script>
        <Script src="custom.js" strategy="afterInteractive"></Script>
        </div>
    
    );

    }
    export default Home;