<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
    session_start();

    $senhaAnterior = md5($data['senhaAnterior']);
    $senha = md5($data['senha']);
    $email = $data['email'];
    $token = $_SESSION['token'];
    $novoToken = md5($email.''.$senha);

    $sql = "select * from usuario where token = '$token' and senha = '$senhaAnterior'";
    $rs = mysqli_query($conexao, $sql);
    if(mysqli_num_rows($rs) > 0) {
        $sql = "update usuario set senha = '$senha', token = '$novoToken' where token = '$token'";
        $rs = mysqli_query($conexao, $sql);
        echo "true";
    } else {
        echo "false";
    }
?>
