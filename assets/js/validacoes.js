// Os comentários estão sendo referidos as validações do consulta.html. Foram usadas as mesmas funções para o paciente.html e index.html(contato).

// validarNomes() usado para fazer a verificação do campo Nome completo, Cidade e Bairro.
function validarNomes ()
{
    var nome = event.target.value;
    var arr = nome.split(" ");

    if(arr[1])
    {
        event.target.style.border= "1px solid green";
        return true;
    }
    else
    {
        event.target.style.border = "1px solid red";
        event.target.setAttribute('placeholder', 'Digite o campo corretamente!');
        event.target.value = "";
    }   
}

// mascara() usado para fazer a verificação do campo Telefone, CPF e CEP.
function mascara(m,t,e){
    var cursor = t.selectionStart;
    var texto = t.value;
    texto = texto.replace(/\D/g,'');
    var l = texto.length;
    var lm = m.length;
    if(window.event) {                  
       id = e.keyCode;
    } else if(e.which){                 
       id = e.which;
    }
    cursorfixo=false;
    if(cursor < l)cursorfixo=true;
    var livre = false;
    if(id == 16 || id == 19 || (id >= 33 && id <= 40))livre = true;
    ii=0;
    mm=0;
    if(!livre){
       if(id!=8){
          t.value="";
          j=0;
          for(i=0;i<lm;i++){
             if(m.substr(i,1)=="#"){
                t.value+=texto.substr(j,1);
                j++;
             }else if(m.substr(i,1)!="#"){
                      t.value+=m.substr(i,1);
                    }
                    if(id!=8 && !cursorfixo)cursor++;
                    if((j)==l+1)
                        break;    
          } 	
       }
    }
    if(cursorfixo && !livre)cursor--;
      t.setSelectionRange(cursor, cursor);

    var l = texto.length;
    if (j > l)
    {
        event.target.style.border = "1px solid red";
        event.target.setAttribute('placeholder', 'Digite o campo corretamente!');
        event.target.value = "";
    }
    else
    {
        t.style.border = "1px solid green";
    }
  }

// validarEmail() usado para fazer a verificação do campo Email.
function validarEmail ()
{
    var email = event.target.value;
    var regEx = new RegExp(/^(\w+[\-\.])*\w+@(\w+\.)+[A-Za-z]+$/); 

    var validacaoEmail = regEx.test(email);

    if(validacaoEmail)
        event.target.style.border= "1px solid green";
    else
    {
        event.target.style.border = "1px solid red";
        event.target.setAttribute('placeholder', 'Digite o campo corretamente!');
        event.target.value = "";
    }   
}

// validarData() usado para fazer a verificação do campo Data de nascimento.
function validarData ()
{
    var data = event.target.value;
    var arr = data.split("-");
    var op=true;

    var dataAtual = new Date();
    var dia = dataAtual.getDate();
    var mes = dataAtual.getMonth();
    var ano = dataAtual.getFullYear();
    var anoAntigo = ano - 105;

    console.log(anoAntigo);
    if(arr[0] == '')
    {
        event.target.style.border = "1px solid red";
        op=false;
    }
    else
    {
        if(arr[0] > ano || arr[0] < anoAntigo)
        {
            event.target.style.border = "1px solid red";
            event.target.value = "";
            op = false;
        }
        else
        {
            if(arr[0] == ano)
            {
                if(arr[2] > dia)
                {
                    if(arr[1] > mes)
                    {
                        event.target.style.border= "1px solid red";
                        event.target.value = "";
                        op = false;
                    }
                }
            }
        }
    }
    if(op == true)
        event.target.style.border= "1px solid green";
    
}

//validarCidade() usado para fazer a verificação do campo Cidade
function validarCidade ()
{
    var cidade = event.target.value;

    if(cidade)
        event.target.style.border= "1px solid green";
    else
    {
        event.target.style.border= "1px solid red";
        event.target.setAttribute('placeholder', 'Digite o campo corretamente!');
        event.target.value = "";
    }
        
}

// borda(select) usado para fazer a verificação do campo Sexo e Estado.
function borda (select)
{
    var opSelecionada = select.value;

    if(opSelecionada != "Selecione uma opção")
        select.style.border= "1px solid green";
    else
        select.style.border= "1px solid red";
}

// paciente.html
function validarHora ()
{
    var hora = event.target.value;
    
    var horaArr = hora.split(":");

    if(horaArr[0] && horaArr[1])
        event.target.style.border= "1px solid green";
    else
    {
        event.target.style.border= "1px solid red";
        event.target.value = "";
    }
        
}

var listaPaciente = [];

function tabelaDinamica ()
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

    if(vnome && vtelefone && vemail && vnascimento && vcpf && vendereco && vbairro && vsexo && vcidade && vestado && vcep)
    {
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

    }
    else
    {
        if(vnome == "")
        {
            document.getElementById('nome').style.border = "1px solid red";
            document.getElementById('nome').setAttribute('placeholder', 'Digite o nome corretamente!');
        }
        if(vtelefone == "")
        {
            document.getElementById('telefone').style.border = "1px solid red";
            document.getElementById('telefone').setAttribute('placeholder', 'Digite o telefone corretamente!');
        }
        if(vemail == "")
        {
            document.getElementById('email').style.border = "1px solid red";
            document.getElementById('email').setAttribute('placeholder', 'Digite o email corretamente!');
        }
        if(vnascimento == "")
        {
            document.getElementById('nascimento').style.border = "1px solid red";
        }
        if(vcpf == "")
        {
            document.getElementById('cpf').style.border = "1px solid red";
            document.getElementById('cpf').setAttribute('placeholder', 'Digite o CPF corretamente!');
        }
        if(vendereco == "")
        {
            document.getElementById('endereco').style.border = "1px solid red";
            document.getElementById('endereco').setAttribute('placeholder', 'Digite o endereço corretamente!');
        }
        if(vbairro == "")
        {
            document.getElementById('bairro').style.border = "1px solid red";
            document.getElementById('bairro').setAttribute('placeholder', 'Digite o bairro corretamente!');
        }
        if(vsexo == "Selecione uma opção")
        {
            document.getElementById('sexo').style.border = "1px solid red";
        }
        if(vcidade == "")
        {
            document.getElementById('cidade').style.border = "1px solid red";
            document.getElementById('cidade').setAttribute('placeholder', 'Digite a cidade corretamente!');
        }
        if(vestado == "Selecione uma opção")
        {
            document.getElementById('estado').style.border = "1px solid red";
        }
        if(vcep == "")
        {
            document.getElementById('cep').style.border = "1px solid red";
            document.getElementById('cep').setAttribute('placeholder', 'Digite o CEP corretamente!');
        }
    }
}

var cont = 1;
var div = 0;
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

        div = cont % 2;
        cont++;
        console.log(div);
        if(div == 0)
        {
            html += `
            <tr class="tbody">
                <td data-th="Nome" style="margin-top: 20px; background-color: #00b6a1;">${dados_paciente.nome}</td>
                <td data-th="Telefone" style="background-color: #00b6a1;"">${dados_paciente.telefone}</td>
                <td data-th="Email" style="background-color: #00b6a1;"">${dados_paciente.email}</td>
                <td data-th="Data de Nascimento" style="background-color: #00b6a1;"">${dados_paciente.nascimento}</td>
                <td data-th="CPF" style="background-color: #00b6a1;"">${dados_paciente.cpf}</td>
                <td data-th="Endereço" style="background-color: #00b6a1;"">${dados_paciente.endereco}</td>
                <td data-th="Bairro" style="background-color: #00b6a1;"">${dados_paciente.bairro}</td>
                <td data-th="Sexo" style="background-color: #00b6a1;"">${dados_paciente.sexo}</td>
                <td data-th="Cidade" style="background-color: #00b6a1;"">${dados_paciente.cidade}</td>
                <td data-th="Estado" style="background-color: #00b6a1;"">${dados_paciente.estado}</td>
                <td data-th="CEP" style="background-color: #00b6a1;"">${dados_paciente.cep}</td>
            </tr>
         `
        }
        else
        {
            html += `
            <tr class="tbody">
                <td data-th="Nome" style="margin-top: 20px; background-color: #43e6d39c;">${dados_paciente.nome}</td>
                <td data-th="Telefone" style="background-color: #43e6d39c;">${dados_paciente.telefone}</td>
                <td data-th="Email" style="background-color: #43e6d39c;">${dados_paciente.email}</td>
                <td data-th="Data de Nascimento" style="background-color: #43e6d39c;">${dados_paciente.nascimento}</td>
                <td data-th="CPF" style="background-color: #43e6d39c;">${dados_paciente.cpf}</td>
                <td data-th="Endereço" style="background-color: #43e6d39c;">${dados_paciente.endereco}</td>
                <td data-th="Bairro" style="background-color: #43e6d39c;">${dados_paciente.bairro}</td>
                <td data-th="Sexo" style="background-color: #43e6d39c;">${dados_paciente.sexo}</td>
                <td data-th="Cidade" style="background-color: #43e6d39c;">${dados_paciente.cidade}</td>
                <td data-th="Estado" style="background-color: #43e6d39c;">${dados_paciente.estado}</td>
                <td data-th="CEP" style="background-color: #43e6d39c;">${dados_paciente.cep}</td>
            </tr>
         `
        }
        
    }
    tabela.innerHTML = html;

}