<?php
    header("Content-Type: text/html; charset=UTF-8",true);
    $conexao = mysqli_connect('localhost','root','','tecnews');

    mysqli_query($conexao,"SET NAMES 'utf8'");
    mysqli_query($conexao,'SET character_set_connection=utf8');
    mysqli_query($conexao,'SET character_set_client=utf8');
    mysqli_query($conexao,'SET character_set_results=utf8');
?>
