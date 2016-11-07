<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
    $token = $data['token'];
    session_start();
    $_SESSION['token'] = $token;
    echo 'true';
?>
