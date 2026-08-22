# Classificação de Perfil de Usuário com TensorFlow.js & Node.js

Este projeto demonstra a implementação prática de uma **Rede Neural Artificial para classificação multiclasse** utilizando o **TensorFlow.js (`@tensorflow/tfjs-node`)** no ambiente backend com Node.js.

O objetivo do modelo é receber características tabulares de perfis de usuários (idade, preferência de cor e localização geográfica) e inferir automaticamente a categoria contratual/perfil do cliente (**`premium`**, **`medium`** ou **`basic`**).

---

## Visão Geral da Arquitetura de Dados

Redes neurais operam exclusivamente sobre matrizes numéricas. Por isso, os dados categóricos e contínuos passam pelas técnicas de **Normalização** e **One-Hot Encoding** antes de alimentarem os tensores de entrada.

### 1. Representação do Dataset de Entrada (`X`)

Cada perfil é convertido em um vetor numérico de 7 dimensões:

$$\text{Vetor de Entrada} = [\text{Idade Normalizada}, \text{Azul}, \text{Vermelho}, \text{Verde}, \text{São Paulo}, \text{Rio de Janeiro}, \text{Curitiba}]$$

| Nome | Idade Real | Idade Normalizada (0 a 1) | Cor Favorita | Localização | Vetor de Features (Tensor 2D) |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Erick** | 30 | `0.33` | Azul | São Paulo | `[0.33, 1, 0, 0, 1, 0, 0]` |
| **Ana** | 25 | `0.00` | Vermelho | Rio de Janeiro | `[0.00, 0, 1, 0, 0, 1, 0]` |
| **Carlos** | 40 | `1.00` | Verde | Curitiba | `[1.00, 0, 0, 1, 0, 0, 1]` |

---

### 2. Representação das Classes de Saída (`Y`)

As classes previstas utilizam codificação **One-Hot Encoding** em 3 dimensões:

$$\text{Ordem dos Labels} = [\text{premium}, \text{medium}, \text{basic}]$$

* **Premium (Erick):** `[1, 0, 0]`
* **Medium (Ana):** `[0, 1, 0]`
* **Basic (Carlos):** `[0, 0, 1]`

---

## Como Executar o Projeto

### Pré-requisitos
* **Node.js** (versão 18+)
* **Visual C++ Redistributable 2015–2022 (x64)** *(necessário no Windows para rodar as bibliotecas nativas C++ do `@tensorflow/tfjs-node`)*

### Passo 1: Clonar o Repositório
```bash
git clone [https://github.com/diegoserra17/RedeNeural_TensorFlow.git](https://github.com/diegoserra17/RedeNeural_TensorFlow.git)
cd RedeNeural_TensorFlow
