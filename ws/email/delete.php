<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];

    $sql = "DELETE FROM email WHERE email='$email'";

    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
