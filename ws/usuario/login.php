<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
    $email = addslashes($data['email']);
    $senha = md5($data['senha']);
    $sql = "select token from usuario where email = '$email' and senha = '$senha'";
    $rs = mysqli_query($conexao, $sql);
    if(mysqli_num_rows($rs) > 0) {
        echo 'true';
        $row = mysqli_fetch_row($rs);
        session_start();
        $_SESSION['token'] = $row[0];
    } else {
        echo 'false';
    }


?>
