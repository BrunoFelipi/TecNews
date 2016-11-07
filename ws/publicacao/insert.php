<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idUsuario = $data['idUsuario'];
    $tipo = $data['tipo'];
    $titulo = $data['titulo'];
    $conteudo = $data['conteudo'];
    $tag = $data['tag'];
    $datahora = 'now()';
    $ativo = '1';

    $sql = "INSERT INTO publicacao VALUES (0,'$idUsuario','$tipo','$titulo','$conteudo','$tag',$datahora,'$ativo')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
