const soap = require('soap');
const url = 'https://apphom.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';
var args = {cep: '05723380'};

soap.createClient(url, {}, function(err, client) {
  client.consultaCEP(args, function(err, result) {
    console.log(result);
  })  
});


