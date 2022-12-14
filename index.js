class Aluno {
    constructor(nome,faltas,notas){
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
    }
    
        calcularMedia(){
            let soma = 0;
            for (let nota of this.notas){
                soma += nota;
            }

            
            //console.log((soma / this.notas.length).toFixed(1));
            return (soma / this.notas.length).toFixed(1);


             

        };

        calcularFaltas(){
            return (this.faltas++)
        }


}

function AprovarAluno(aluno) {

    if (aluno.calcularMedia() >= curso.notaAprov && aluno.calcularFaltas() < curso.falta) {
        console.log(`Aluno `);
        console.log(`Aluno ${aluno.nome} foi aprovado com média ${aluno.calcularMedia()}`);
        return true;

    }
    else if (aluno.calcularMedia() >= curso.notaAprov && aluno.calcularFaltas() == curso.falta) {
        if (aluno.calcularMedia() > (curso.notaAprov + (curso.notaAprov * 0.1))) {
            console.log(`Aluno ${aluno.nome} foi aprovado com média ${aluno.calcularMedia()}`);
            return true;
        }
        console.log(`Aluno ${aluno.nome} foi reprovado com média ${aluno.calcularMedia()}`);
        return false;
    }
    console.log(`Aluno ${aluno.nome} foi aprovado com média ${aluno.calcularMedia()}`);
    return false;
}


const curso = {
    nomeCurso: 'Programação Avançada',
    notaAprov: 7,
    falta: 5,
    listaestudante: [],
    adicionarAluno(nome, faltas, notas) {

        const novoaluno = new Aluno(nome, faltas, notas);
        this.listaestudante.push(novoaluno);

    },

    consultarAluno(alunoConsultar) {

        for (let aluno of this.listaestudante) {
            if (alunoConsultar === aluno.nome) {
                return AprovarAluno(aluno);

            }
        }
    },

    consultarTodos() {
        const todosAlunos = [];
        for (let aluno of this.listaestudante) {
            todosAlunos.push(this.consultarAluno(aluno.nome))
                //media = (listaestudantes.nota1 + listaestudantes.nota2 + listaestudantes.nota3 + listaestudantes.nota4) / 4;
                //console.log('A média do aluno: ' + listaestudantes.nome + ' é: ' + media);
            }
            return todosAlunos;
        }

    }

curso.adicionarAluno('Felipe Rospendowski', 1,[0,9,5,9]);
curso.adicionarAluno('Thalita Rospendowski', 1,[0,2,1,3]);
curso.adicionarAluno('Beatriz Mazzini', 1,[10,9,3,9]);
curso.adicionarAluno('Thiago Santos', 1,[10,9,4,9]);
curso.adicionarAluno('Bernardo Moreira', 1,[10,5,8,9]);
curso.adicionarAluno('Carolina Silva', 1,[8,4,5,9]);


console.log(curso.consultarAluno('Thalita Rospendowski'));


console.log(curso.consultarTodos());
