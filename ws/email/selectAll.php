<?php
    include '../conexao.php';

    $sql = "select id,email from email group by email";

    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
?>
