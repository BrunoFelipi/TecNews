<?php
	$data = json_decode(file_get_contents('php://input'), true);
	$email = $data['email'];
	$nome = $data['nome'];

	//Inclui o arquivo class.phpmailer.php localizado na pasta do phpmailer
	//require_once("../phpmailer/class.phpmailer.php");
    require_once("../phpmailer/PHPMailerAutoload.php");

	//Inicia a classe PHPMailer
	$mail = new PHPMailer(true);

	//Define os dados do servidor e tipo de conexão
	//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->IsSMTP(); // Define que a mensagem será SMTP

	try {
		$mail->Host 	= 'mail.senior.com.br'; // Endereço do servidor SMTP (Autenticação, utilize o host smtp.seudomínio.com.br)
		$mail->SMTPAuth = false;  // Usar autenticação SMTP (obrigatório para smtp.seudomínio.com.br)
		$mail->SMTPSecure = 'tls'; //Tipo de segurança do SMTP
		$mail->Port 	= 25; //  Usar 587 porta SMTP
		$mail->Username = 'tecnews@senior.com.br'; // Usuário do servidor SMTP (endereço de email)
		$mail->CharSet = "UTF-8";
		//$mail->Password = base64_decode('dmluaWNpdXM1'); // Senha do servidor SMTP (senha do email usado)

		//Define o remetente
		// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		$mail->SetFrom('tecnews@senior.com.br', 'TecNews'); //Seu e-mail
		$mail->AddReplyTo('tecnews@senior.com.br', 'TecNews'); //Seu e-mail
		$mail->Subject = "TecNews - Cadastro Aprovado";//Assunto do e-mail

		//Define os destinatário(s)
		//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		//$mail->AddAddress('vinicius.reif@senior.com.br', 'Testes');
        //$mail->AddAddress('bruno.souza@senior.com.br', 'Testes');
		$mail->AddAddress($email, $email);
		//Campos abaixo são opcionais
		//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		//$mail->AddCC('destinarario@dominio.com.br', 'Destinatario'); // Copia
		$mail->AddBCC('bruno.souza@senior.com.br', 'bruno.souza@senior.com.br'); // Cópia Oculta
		$mail->AddBCC('vinicius.reif@senior.com.br', 'vinicius.reif@senior.com.br'); // Cópia Oculta
		//$mail->AddBCC('bruno.souza@senior.com.br', 'Bruno'); // Cópia Oculta
		//$mail->AddAttachment('images/phpmailer.gif');      // Adicionar um anexo

		//Define o corpo do email
		$mail->MsgHTML("

			<body bgcolor='#FFFFFF' topmargin='0' leftmargin='0' marginheight='0' marginwidth='0'>

				<!-- HEADER -->
				<table class='head-wrap'>
					<tr>
						<td></td>
						<td class='header container' align=''>

							<!-- /content -->
							<div class='content'>
								<table>
									<tr>
										<td><a href='http://pcbnu006300:99/TecNews'><img src='../../resources/logo.png'/></a></td>
									</tr>
								</table>
							</div><!-- /content -->

						</td>
						<td></td>
					</tr>
				</table><!-- /HEADER -->

				<!-- BODY -->
				<table class='body-wrap' bgcolor=''>
					<tr>
						<td></td>
						<td class='container' align='' bgcolor='#FFFFFF'>

							<!-- content -->
							<div class='content'>

								<table bgcolor=''>
									<tr>
										<td style='vertical-align: top'>
											<p>Olá, <b>$nome</b>. Seu cadastro foi aprovado. 
											<br><br>
											Sua senha padrão é: <b>12345678</b>. 
											<br><br>
											Acesse <b style='color: #03a39b'>TecNews</b> e mantenha o mundo informado.
											<br>
											<br>											
											</p>											
										</td>
									</tr>
								</table>

							</div><!-- /content -->
						</td>
						</tr>
				</table><!-- /BODY -->

				<!-- FOOTER -->
				<table class='footer-wrap'>
					<tr>
						<td></td>
						<td class='container'>

							<!-- content -->
							<div class='content'>
								<table>
									<tr>
										<td align='center'>
											<p>
												
											</p>
										</td>
									</tr>
								</table>
							</div>
						</td>
						<td></td>
					</tr>
				</table>
			</body>

						");

		////Caso queira colocar o conteudo de um arquivo utilize o método abaixo ao invés da mensagem no corpo do e-mail.
		//$mail->MsgHTML(file_get_contents('arquivo.html'));

		$mail->Send();
		echo "true";

    //caso apresente algum erro é apresentado abaixo com essa exceção.
    } catch (phpmailerException $e) {
		echo $e->errorMessage(); //Mensagem de erro costumizada do PHPMailer
	}
?>
