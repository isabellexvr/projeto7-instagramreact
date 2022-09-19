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

    const post = [
        {
            imgUser: "assets/img/meowed.svg", nomeUser: "meowed", imgContent: "assets/img/gato-telefone.svg",
            likePrincipal: "respondeai", numberOfLikes: "101.523"
        },
        {
            imgUser: "assets/img/barked.svg", nomeUser: "barked", imgContent: "assets/img/dog.svg",
            likePrincipal: "adorable_animals", numberOfLikes: "99.159"
        }
    ]

    return (
        <div class="posts">
            {post.map((postagem) =>
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={postagem.imgUser} />
                            {postagem.nomeUser}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>

                    <div class="conteudo">
                        <img src={postagem.imgContent} />
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
                                Curtido por <strong>{postagem.likePrincipal}</strong> e <strong>outras {(preenchidoCurtir === "heart") ? (Number(postagem.numberOfLikes) + 0.001).toFixed(3) : postagem.numberOfLikes} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}