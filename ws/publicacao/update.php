<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idPublicacao = $data['idPublicacao'];
    $idUsuario = $data['idUsuario'];
    $tipo = $data['tipo'];
    $titulo = $data['titulo'];
    $conteudo = $data['conteudo'];
    $tag = $data['tag'];
    $data = 'CURRENT_TIMESTAMP';
    $ativo = '1';

    $sql = "UPDATE publicacao SET id_usuario=$idUsuario, tipo='$tipo', titulo='$titulo', conteudo='$conteudo', tag='$tag', data=$data, ativo=$ativo where id=$idPublicacao";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
