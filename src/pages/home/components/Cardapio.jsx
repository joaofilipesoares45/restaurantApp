import { numberForBrl } from "../../../utils/functions";
import "../css/cardapio.css"

const cardapio = {
    Entradas: [
        { nome: "Bruschetta de Tomate", descricao: "Fatias de pão italiano torradas, cobertas com tomates frescos picados, manjericão, azeite e um toque de alho.", preco: 15.00 },
        { nome: "Caldo Verde", descricao: "Tradicional sopa portuguesa cremosa e reconfortante, feita com batatas, couve e linguiça portuguesa.", preco: 18.00 },
        { nome: "Dadinhos de Tapioca com Molho de Mel", descricao: "Deliciosos cubos de tapioca fritos, crocantes por fora e macios por dentro, servidos com um irresistível molho de mel.", preco: 22.00 }
    ],
    Pratos_principais: [
        {
            nome: "Filé Mignon ao Molho Roquefort",
            descricao: "Corte nobre de filé mignon grelhado na perfeição, coberto com um cremoso molho de queijo Roquefort.",
            preco: 75.00
        },
        {
            nome: "Churrasco Misto (Picanha, Costela, Linguiça)",
            descricao: "Seleção de carnes grelhadas no ponto, incluindo suculenta picanha, costela saborosa e linguiça artesanal.",
            preco: 68.00
        },
        {
            nome: "Frango Grelhado com Batata Rustica",
            descricao: "Peito de frango grelhado, macio e saboroso, acompanhado de batatas rústicas assadas, temperadas com ervas finas.",
            preco: 45.00
        },
        { nome: "Espaguete ao Carbonara", descricao: "Tradicional massa italiana com espaguete, ovos, queijo Pecorino Romano, bacon e pimenta-do-reino.", preco: 48.00 },
        { nome: "Fettuccine Alfredo", descricao: "Massa fettuccine ao molho Alfredo, um clássico cremoso e levemente picante feito com manteiga, queijo parmesão e creme de leite.", preco: 42.00 },
        {
            nome: "Ravioli de Ricota com Molho Pesto",
            descricao: "Massa fresca recheada com ricota cremosa, servida com um saboroso molho pesto, feito com manjericão, alho, queijo parmesão e azeite.",
            preco: 55.00
        },
        { nome: "Salmão Grelhado com Aspargos", descricao: "Salmão grelhado na perfeição, suculento e saboroso, acompanhado de aspargos frescos grelhados.", preco: 65.00 },
        { nome: "Moqueca de Camarão", descricao: "Tradicional moqueca capixaba, feita com camarões frescos, leite de coco, tomate, cebola e coentro.", preco: 70.00 }
    ],
    Sobremesas: [
        { nome: "Mousse de Chocolate", descricao: "Deliciosa mousse de chocolate cremosa e suave, perfeita para finalizar a sua refeição.", preco: 18.00 },
        { nome: "Petit Gateau", descricao: "Bolo de chocolate quente por dentro e crocante por fora, servido com sorvete de creme.", preco: 20.00 },
        { nome: "Sorvete de Doce de Leite", descricao: "Tradicional sorvete artesanal de doce de leite, cremoso e saboroso.", preco: 15.00 }
    ],
    Bebidas: [
        { nome: "Refrigerantes", preco: 8.00 },
        { nome: "Sucos Naturais", preco: 12.00 },
        { nome: "Cervejas", preco: 10.00, observacao: "A partir de" }
    ]
};

export default function Cardapio() {
    return (
        <div className="component cardapio">
            <h2>Cardapio</h2>
            <div className="list-contain">
                {Object.keys(cardapio).map(key => {
                    return (
                        <div className={"sub-title"} key={key}>
                            <h3>{String(key).replace("_", " ")}</h3>
                            <div className="list">
                                {cardapio[key].map((item, index) => {
                                    const { nome, descricao, preco } = item

                                    return (
                                        <div className="item" key={"prato" + index}>
                                            <div className="img">

                                            </div>
                                            <div className="info">
                                                <h4>{nome}<p>{descricao}</p></h4>
                                                <span>{numberForBrl(preco)}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}