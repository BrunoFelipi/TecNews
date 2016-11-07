<?php
    include '../conexao.php';

    $sql = "select id,email,ativo from registro where ativo = 1";

    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
?>
