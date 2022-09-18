import React from 'react'

export default function Usuario() {

    const [img, setImg] = React.useState("assets/img/catanacomics.svg")

    const [nome, setNome] = React.useState("catanacomics")

    return (
        <div class="usuario">
        <img onClick={()=>setImg(prompt("Digite aqui a URL da imagem desejada."))} src={img} />
        <div class="texto">
            <strong>{nome}</strong>
            <span>
                Catana
                <ion-icon onClick={()=>setNome(prompt("Qual é o seu nome"))} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}