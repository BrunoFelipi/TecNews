<?php
    $from = "bruno.souza@senior.com.br";
    $to = addslashes($_GET["email"]);
    $token = addslashes($_GET["token"]);

    $subject = "Website Change Request";

    $headers = "From:" . $to . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $message = "<html>";
    $message .= "<head>";
    $message .= "</head>";
    $message .= "<body>";
    $message .= "<table cellspacing='0' cellpadding='0'>";
    $message .= "<tr>";
    $message .= "<td align='center' width='300' height='40' bgcolor='#505050' style='-webkit-border-radius: 5px; -moz-border-radius: 5px; border-radius: 5px; color: #ffffff; display: block;'>";
    $message .= "<a href='http://pcbnu006300/CucaManager/#/alterarSenha?token=$token' style='font-size:16px; font-weight: bold; font-family: Helvetica, Arial, sans-serif; text-decoration: none; line-height:40px; width:100%; display:inline-block'>";
    $message .= "<span style='color: #FFFFFF'>Clique aqui para alterar sua senha</span>";
    $message .= "</a>";
    $message .= "</td>";
    $message .= "</tr>";
    $message .= "</table>";
    $message .= "</body>";
    $message .= "</html>";

    mail($to, $subject, $message, $headers);
?>
