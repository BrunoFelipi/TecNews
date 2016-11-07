<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];
    $senha = md5('12345678');
    $token = md5($email.''.$senha);

    $sql = "INSERT INTO usuario VALUES (0,'$email','$senha','$token',1)";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
