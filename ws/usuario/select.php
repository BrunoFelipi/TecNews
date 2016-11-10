<?php
    include '../conexao.php';
	require '../../vendor/autoload.php';

    session_start();
    $token = $_SESSION['token'];
    $sql = "select id,email from usuario where token = '$token'";

    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
?>
