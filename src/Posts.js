import React from 'react'

export default function Posts() {

    const [curtido, setCurtido] = React.useState(true)
    const [preenchidoCurtir, setPreenchidoCurtir] = React.useState("heart-outline")

    const [salvo, setSalvo] = React.useState(true);
    const [preenchidoSalvar, setPreenchidoSalvar] = React.useState("bookmark-outline");

    function cliqueSalvar() {

        setSalvo(booleano => !booleano)
        setPreenchidoSalvar(salvo ? 'bookmark' : 'bookmark-outline')

    }

    function cliqueCurtir() {
        setCurtido(booleano => !booleano)
        setPreenchidoCurtir(curtido ? 'heart' : 'heart-outline')

    }

    return (
        <div class="posts">
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/meowed.svg" />
                        meowed
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/gato-telefone.svg" />
                </div>

                <div class="fundo">
                    <div class="acoes">
                        <div>
                            <ion-icon
                            onClick={cliqueCurtir}
                            style={{color: (preenchidoCurtir === "heart") ? 'red' : ''}} 
                            name={preenchidoCurtir}>
                                </ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div onClick={cliqueSalvar}>
                            <ion-icon name={preenchidoSalvar}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/respondeai.svg" />
                        <div class="texto">
                            Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src="assets/img/barked.svg" />
                        barked
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>

                <div class="conteudo">
                    <img src="assets/img/dog.svg" />
                </div>

                <div class="fundo">
                <div class="acoes">
                        <div>
                            <ion-icon
                            onClick={cliqueCurtir}
                            style={{color: (preenchidoCurtir === "heart") ? 'red' : ''}} 
                            name={preenchidoCurtir}>
                                </ion-icon>
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                        </div>
                        <div onClick={cliqueSalvar}>
                            <ion-icon name={preenchidoSalvar}></ion-icon>
                        </div>
                    </div>

                    <div class="curtidas">
                        <img src="assets/img/adorable_animals.svg" />
                        <div class="texto">
                            Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}