const campos = [ 
  document.querySelector('.nome'),
  document.querySelector('.sobrenome'),
  document.querySelector('.cpf'),
  document.querySelector('.usuario'),
  document.querySelector('.senha'),
  document.querySelector('.repetir-senha'),
  document.querySelector('.btn')
]

class ValidaForm{
  constructor(nome, sobrenome, cpf, usuario, senha, RSsenha, button) {
    this.nome = nome;
    this.sobrenome = sobrenome,
    this.cpf = cpf;
    this.usuario = usuario;
    this.senha = senha;
    this.RSsenha = RSsenha
    this.button = button
  }
  valida(){
    this.button.addEventListener('click', () => {
      this.validaVazio()

    })
  }
  validaVazio(){
    if(
      this.nome.value == ''||
      this.sobrenome.value == '' ||
      this.cpf.value == '' ||
      this.usuario.value == '' ||
      this.senha == '' || 
      this.RSsenha == ''
    ) alert('voce deixou algum dos campos vazios')
  }


}

const form = new ValidaForm(campos[0],campos[1],campos[2],campos[3],campos[4],campos[5],campos[6])
form.valida()
console.log(form)