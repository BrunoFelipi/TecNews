<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $ativo = $data['ativo'];
    $id = $data['id'];

    $sql = "update publicacao set ativo = $ativo where id = $id";

    echo $rs = mysqli_query($conexao, $sql);
?>
