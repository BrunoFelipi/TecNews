<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];

    $sql = "insert into registro values (0,'$email',1)";

    $rs = mysqli_query($conexao, $sql);
?>
