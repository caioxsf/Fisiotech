// Os comentários estão sendo referidos as validações do consulta.html. Foram usadas as mesmas funções para o paciente.html e index.html(contato).

// validarNomes() usado para fazer a verificação do campo Nome completo, Cidade e Bairro.
// function validarNomes ()
// {
//     var nome = event.target.value;
//     var arr = nome.split(" ");

//     if(arr[1])
//     {
//         event.target.style.border= "1px solid green";
//         return true;
//     }
//     else
//     {
//         event.target.style.border = "1px solid red";
//         event.target.setAttribute('placeholder', 'Digite o campo corretamente!');
//         event.target.value = "";
//     }   
// }

// // mascara() usado para fazer a verificação do campo Telefone, CPF e CEP.
// function mascara(m,t,e){
//     var cursor = t.selectionStart;
//     var texto = t.value;
//     texto = texto.replace(/\D/g,'');
//     var l = texto.length;
//     var lm = m.length;
//     if(window.event) {                  
//        id = e.keyCode;
//     } else if(e.which){                 
//        id = e.which;
//     }
//     cursorfixo=false;
//     if(cursor < l)cursorfixo=true;
//     var livre = false;
//     if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
//     ii=0;
//     mm=0;
//     if(!livre){
//        if(id!=8){
//           t.value="";
//           j=0;
//           for(i=0;i<lm;i++){
//              if(m.substr(i,1)=="#"){
//                 t.value+=texto.substr(j,1);
//                 j++;
//              }else if(m.substr(i,1)!="#"){
//                       t.value+=m.substr(i,1);
//                     }
//                     if(id!=8 && !cursorfixo)cursor++;
//                     if((j)==l+1)
//                         break;    
//           } 	
//        }
//     }
//     if(cursorfixo && !livre)cursor--;
//       t.setSelectionRange(cursor, cursor);

//     var l = texto.length;
//     if (j > l)
//     {
//         event.target.style.border = "1px solid red";
//         event.target.setAttribute('placeholder', 'Digite o campo corretamente!');
//         event.target.value = "";
//     }
//     else
//     {
//         t.style.border = "1px solid green";
//     }
//   }

// // validarEmail() usado para fazer a verificação do campo Email.
// function validarEmail ()
// {
//     var email = event.target.value;
//     var regEx = new RegExp(/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/); 

//     var validacaoEmail = regEx.test(email);

//     if(validacaoEmail)
//         event.target.style.border= "1px solid green";
//     else
//     {
//         event.target.style.border = "1px solid red";
//         event.target.setAttribute('placeholder', 'Digite o campo corretamente!');
//         event.target.value = "";
//     }   
// }

// // validarData() usado para fazer a verificação do campo Data de nascimento.
// function validarData ()
// {
//     var data = event.target.value;
//     var arr = data.split("-");
//     var op=true;

//     var dataAtual = new Date();
//     var dia = dataAtual.getDate();
//     var mes = dataAtual.getMonth();
//     var ano = dataAtual.getFullYear();

//     console.log(arr);
//     if(arr[0] == '')
//     {
//         event.target.style.border = "1px solid red";
//         op=false;
//     }
//     else
//     {
//         if(arr[0] > ano)
//         {
//             event.target.style.border = "1px solid red";
//             event.target.value = "";
//             op = false;
//         }
//         else
//         {
//             if(arr[0] == ano)
//             {
//                 if(arr[2] > dia)
//                 {
//                     if(arr[1] > mes)
//                     {
//                         event.target.style.border= "1px solid red";
//                         event.target.value = "";
//                         op = false;
//                     }
//                 }
//             }
//         }
//     }
//     if(op == true)
//         event.target.style.border= "1px solid green";
    
// }

// //validarCidade() usado para fazer a verificação do campo Cidade
// function validarCidade ()
// {
//     var cidade = event.target.value;

//     if(cidade)
//         event.target.style.border= "1px solid green";
//     else
//     {
//         event.target.style.border= "1px solid red";
//         event.target.setAttribute('placeholder', 'Digite o campo corretamente!');
//         event.target.value = "";
//     }
        
// }

// // borda(select) usado para fazer a verificação do campo Sexo e Estado.
// function borda (select)
// {
//     var opSelecionada = select.value;

//     if(opSelecionada != "Selecione uma opção")
//         select.style.border= "1px solid green";
//     else
//         select.style.border= "1px solid red";
// }

// // paciente.html
// function validarHora ()
// {
//     var hora = event.target.value;
    
//     var horaArr = hora.split(":");

//     if(horaArr[0] && horaArr[1])
//         event.target.style.border= "1px solid green";
//     else
//     {
//         event.target.style.border= "1px solid red";
//         event.target.value = "";
//     }
        
// }

var listaPaciente = [];

function validar ()
{
    var vnome = document.getElementById('nome').value;
    var vtelefone = document.getElementById('telefone').value;
    var vemail = document.getElementById('email').value;
    var vnascimento = document.getElementById('nascimento').value;
    var vcpf = document.getElementById('cpf').value;
    var vendereco = document.getElementById('endereco').value;
    var vbairro = document.getElementById('bairro').value;
    var vsexo = document.getElementById('sexo').value;
    var vcidade = document.getElementById('cidade').value;
    var vestado = document.getElementById('estado').value;
    var vcep = document.getElementById('cep').value;

    // if(vnome && vtelefone && vemail && vnascimento && vcpf && vendereco && vbairro && vsexo && vcidade && vestado && vcep)
    // {
        listaPaciente.push ({
            nome: vnome,
            telefone: vtelefone,
            email: vemail,
            nascimento: vnascimento,
            cpf: vcpf,
            endereco: vendereco,
            bairro: vbairro,
            sexo: vsexo,
            cidade: vcidade,
            estado: vestado,
            cep: vcep
        });
        adicionarItem(listaPaciente);
        document.getElementById('display-fundo').style.display = 'block';
    // }
    // else
    //     console.log('erro'); 
}

function adicionarItem (dados)
{
    var tabela = document.getElementById('table');

    html = ` 
        <tr class="thead">
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
            <th>CPF</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Sexo</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>CEP</th>
        </tr>
        
    `;

    for(let dados_paciente of dados)
    {
        html += `
            <tr >
                <td data-th="Nome"style="margin-top: 50px">${dados_paciente.nome}</td>
                <td data-th="Telefone">${dados_paciente.telefone}</td>
                <td data-th="Email">${dados_paciente.email}</td>
                <td data-th="Data de Nascimento">${dados_paciente.nascimento}</td>
                <td data-th="CPF">${dados_paciente.cpf}</td>
                <td data-th="Endereço">${dados_paciente.endereco}</td>
                <td data-th="Bairro">${dados_paciente.bairro}</td>
                <td data-th="Sexo">${dados_paciente.sexo}</td>
                <td data-th="Cidade">${dados_paciente.cidade}</td>
                <td data-th="Estado">${dados_paciente.estado}</td>
                <td data-th="CEP">${dados_paciente.cep}</td>
            </tr>
            
        `
    }
    tabela.innerHTML = html;

}