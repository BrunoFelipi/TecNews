<?php
    include '../conexao.php';

    $sql = "select id,email,token from email order by id ASC";

    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
?>
