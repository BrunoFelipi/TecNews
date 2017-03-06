<?php
    include '../conexao.php';

    $data = json_decode(file_get_contents('php://input'), true);
    $id = $data['id'];
    
    $sql = "select id,tipo,titulo,descricao,dia,corrigido from sugestao where id='$id'";

    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
?>
