<?php
    include '../conexao.php';

/*
    $sql = "select id,id_usuario,tipo,titulo,conteudo as conteudo,data,ativo,tag from publicacao p join (
            select id_publicacao, GROUP_CONCAT((tag) SEPARATOR ' - ') as tag
            from tag group by id_publicacao) as t where p.id = t.id_publicacao order by id desc limit 200";
*/

    $sql = "select id, tipo, titulo, data, concat(substr(conteudo,1,150),'...') as conteudo, tag, usuario, ativo from publicacao order by id desc;";

    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }

    echo(json_encode($json));
?>
