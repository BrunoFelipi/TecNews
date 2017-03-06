<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];

    $sql = "update registro set ativo = 'sim' where email = '$email'";

    $rs = mysqli_query($conexao, $sql);
?>
