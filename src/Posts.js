import React from 'react'

function Post(props) {

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
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={props.imgUsuario} />
                    {props.nomeUsuario}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.imgConteudo} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon
                            onClick={cliqueCurtir}
                            style={{ color: (preenchidoCurtir === "heart") ? 'red' : '' }}
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
                        Curtido por <strong>{props.curtidaPrincipal}</strong> e <strong>outras {(preenchidoCurtir === "heart") ? (Number(props.numeroDeCurtidas)+0.001).toFixed(3) : props.numeroDeCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function Posts() {

    return (
        <div>
            <Post   imgUsuario="assets/img/meowed.svg"
                    nomeUsuario="meowed"
                    imgConteudo="assets/img/gato-telefone.svg"
                    curtidaPrincipal="respondeai"
                    numeroDeCurtidas="101.523"/>

            <Post   imgUsuario="assets/img/barked.svg"
                    nomeUsuario="barked"
                    imgConteudo="assets/img/dog.svg"
                    curtidaPrincipal="adorable_animals"
                    numeroDeCurtidas="99.159"/>
        </div>
    )
}