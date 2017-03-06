<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $email = addslashes($data['email']);

    $sql = "SELECT id,email,ativo FROM registro WHERE email = '$email' AND ativo = 'nao'";
    $rs = mysqli_query($conexao, $sql);

    if(mysqli_num_rows($rs) > 0){
        print "true";
    } else {
        print "false";
    }
?>
