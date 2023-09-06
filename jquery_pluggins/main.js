$(document).ready(function(){

$('#cpf').mask('000.000.000-00', {placeholder: '000.000.000-00'});
$('#cep').mask('00000-000',{placeholder: '00000-000'});

$('#tel').mask('(00)00000-0000', {placeholder: '(00) 00000-0000'});

$('form').validate({
    rules:{
        nome:{
        required: true
    },
    email:{
        required: true,
        email:true
    },
    cpf:{
        required: true
    },
    cep:{
        required: true
    }

},messages:{

    nome:'Por favor insira o seu nome completo.'
,email:'Por favor insira um endereço de email válido'
,cpf:'Por favor insira o seu cpf'
}
});

})