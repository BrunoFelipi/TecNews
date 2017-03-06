<?php
    include '../conexao.php';
    $email = addslashes($_GET["email"]);
    $sql = "SELECT id,email,nome FROM usuario where email = '$email'";
    $rs = mysqli_query($conexao, $sql);

    $numRow = mysqli_num_rows($rs);

    if ($numRow > 0) {
        echo "true";
    } else {
        echo "false";
    }
?>
