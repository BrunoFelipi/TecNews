<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    $token = md5($email);

    $sql = "insert into email values (0,'$email','$token')";

    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }

?>
