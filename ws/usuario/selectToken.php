<?php
    include '../conexao.php';
    $token = addslashes($_GET["token"]);
    $sql = "SELECT id,email,nome FROM usuario where token = '$token'";
    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }
    echo(json_encode($json));
?>
