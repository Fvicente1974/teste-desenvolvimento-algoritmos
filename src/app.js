import readline from 'readline-sync';

// =================================================================
// DESAFIO: TOTEM MEGALODON
// Escreva seu algoritmo de validação e regras de negócio abaixo.
// =================================================================

function iniciarTotem() {
    console.log("=== BEM-VINDO AO TECHPARK ===");
    console.log("Iniciando o sistema da Montanha-Russa MegaloDon...\n");

    // EXEMPLO DE ENTRADA:
    // O readline.question() lê o que o usuário digita como TEXTO (String)

    // 1. FAÇA AQUI A VALIDAÇÃO DO NOME (Se está vazio)
    let nome = readline.question("Digite o nome do cliente: ");
        if (nome == ""){ 
            console.log("")
            console.log("[ERRO] o nome do cliente não pode estar vazio!")
            console.log("")
            return iniciarTotem()
                }
        
    // 2. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA IDADE

    let idade = readline.questionInt("Digite sua idade: ");
        if ( idade <= 1 || idade >=120){
            console.log("")
            console.log("[ERRO] Idade Inválida! Digite uma idade entre 01 a 120")
            console.log("")
            return iniciarTotem()
        }

        // 3. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA ALTURA

    let altura = readline.questionFloat("Digite sua altura: ");

    if ( altura <= 0.50 || altura >= 2.50){
        console.log("")
            console.log("[ERRO] Altura Inválida! A altura deve estar entre 0.50m e 2.50m")
            console.log("")
            return iniciarTotem()
    }

    let temIdade = idade >= 12;
    let temAltura = altura >=1.50;

        if (temIdade && temAltura) {
            console.log("");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
            console.log(`Olá, ${nome}! Cadastro validado com sucesso. Seu acesso foi permitido. Divirta-se na Megalodon!`);
            console.log("");      
            return iniciarTotem();
        }

        else if (temAltura && !temIdade) {
            console.log(""); 
            console.log (`[ACESSO NEGADO] - ${nome}, você possui a altura necessária, mas não atingiu a idade mínima de 12 anos!`);
        }

        else if (temIdade && !temAltura) {
            console.log("") 
            console.log (`[ACESSO NEGADO] - ${nome}, você possui a idade necessária, mas não atingiu a altura mínima de 1.50m!`);
        }

            console.log("");
            return iniciarTotem();
        

        





    
    // =============================================================
    // DICA PARA OS PRÓXIMOS PASSOS:
    // Para ler números inteiros, use: readline.questionInt()
    // Para ler números decimais (altura), use: readline.questionFloat()
    // =============================================================

    // 2. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA IDADE


    // 3. DIGITE ABAIXO A ENTRADA E VALIDAÇÃO DA ALTURA


    // 4. DIGITE ABAIXO AS REGRAS DE NEGÓCIO (SE / SENÃO) DELINEADAS NO GUIA


}

// Executa o sistema do totem
iniciarTotem();