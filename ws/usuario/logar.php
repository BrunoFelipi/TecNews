<?php
    include '../conexao.php';
    $email = addslashes($_GET["email"]);
    $senha = md5(addslashes($_GET["senha"]));
    $sql = "SELECT * FROM usuario where email = '$email' AND senha = '$senha' AND ativo = 's'";
    $rs = mysqli_query($conexao, $sql);

    if (mysqli_num_rows($rs) > 0) {
      echo "true";
    } else {
      echo "false";
    }
?>
