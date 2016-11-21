<?php
    include '../conexao.php';
	$data = json_decode(file_get_contents('php://input'), true);

    $token = $data['token'];

    $sql = "SELECT email from email where token='$token' group by email";

    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
?>
