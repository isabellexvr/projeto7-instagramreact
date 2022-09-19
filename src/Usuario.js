import React from 'react'

function Info(props) {

    const [img, setImg] = React.useState(props.userImg)

    const [nome, setNome] = React.useState(props.userName)

    return (
        <div class="usuario">
            <img src={img} onClick={() => setImg(prompt("Digite aqui a URL da imagem desejada."))} />
            <div class="texto">
                <strong>{nome}</strong>
                <span>
                    Catana
                    <ion-icon onClick={() => setNome(prompt("Qual é o seu nome?"))} name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

export default function Usuario() {

    return (
        <Info userImg="assets/img/catanacomics.svg" userName="catanacomics" />
    )
}