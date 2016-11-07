<?php
    include '../conexao.php';
    session_start();
    echo $_SESSION['token'];
?>
