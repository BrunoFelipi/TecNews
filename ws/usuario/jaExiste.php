<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $email = addslashes($data['email']);

    $sql = "SELECT email FROM usuario WHERE email = '$email'";
    $rs = mysqli_query($conexao, $sql);

    if(mysqli_num_rows($rs) > 0){
        print "true";
    } else {
        print "false";
    }
?>
