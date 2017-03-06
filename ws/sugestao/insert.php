<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $tipo = $data['tipo'];
    $titulo = $data['titulo'];
    $conteudo = $data['conteudo'];
    $corrigido = 'n';

    $sql = "INSERT INTO sugestao VALUES (0,'$tipo','$titulo','$conteudo',NOW(),'$corrigido')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
