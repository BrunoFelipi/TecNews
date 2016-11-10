<?php
	$data = json_decode(file_get_contents('php://input'), true);
	$de = $data['de'];
	$para = $data['para'];
    $tipo = $data['tipo'];
    $titulo = $data['titulo'];
    $conteudo = $data['conteudo'];
    $tag = $data['tag'];
	$token = md5($de);

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
		$mail->Username = $de; // Usuário do servidor SMTP (endereço de email)
		$mail->CharSet = "UTF-8";
		//$mail->Password = base64_decode('dmluaWNpdXM1'); // Senha do servidor SMTP (senha do email usado)

		//Define o remetente
		// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		$mail->SetFrom('tecnews@senior.com.br', 'TecNews'); //Seu e-mail
		$mail->AddReplyTo('tecnews@senior.com.br', 'TecNews'); //Seu e-mail
		$mail->Subject = "TecNews - Publicação Alterada - '$tipo - $titulo'";//Assunto do e-mail

		//Define os destinatário(s)
		//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		//$mail->AddAddress('vinicius.reif@senior.com.br', 'Testes');
        //$mail->AddAddress('bruno.souza@senior.com.br', 'Testes');
		$mail->AddAddress($para, $para);
		//Campos abaixo são opcionais
		//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		//$mail->AddCC('destinarario@dominio.com.br', 'Destinatario'); // Copia
		$mail->AddBCC($para, $para); // Cópia Oculta
		//$mail->AddBCC('bruno.souza@senior.com.br', 'Bruno'); // Cópia Oculta
		//$mail->AddAttachment('images/phpmailer.gif');      // Adicionar um anexo

		//Define o corpo do email
		$mail->MsgHTML("A publicação <b>$tipo - $titulo</b> foi alterada:
						<br>
						<br>
						<b>Tipo:</b>
						<br>
						$tipo
						<br>
						<br>
						<b>Titulo:</b>
						<br>
						$titulo
						<br>
						<br>
						<b>Conteúdo:</b>
						<br>
						$conteudo
						<br>
						<br>
						<b>Tags:</b>
						<br>
						$tag
						<br>
						<br>
						<p>Se desejar, <a href='http://www.w3schools.com/html/'>Clique aqui</a> para remover seu email da lista.</p>");

		////Caso queira colocar o conteudo de um arquivo utilize o método abaixo ao invés da mensagem no corpo do e-mail.
		//$mail->MsgHTML(file_get_contents('arquivo.html'));

		$mail->Send();
		echo "true";

    //caso apresente algum erro é apresentado abaixo com essa exceção.
    } catch (phpmailerException $e) {
		echo $e->errorMessage(); //Mensagem de erro costumizada do PHPMailer
	}
?>
