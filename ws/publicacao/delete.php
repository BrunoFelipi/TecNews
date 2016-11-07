<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];

    $sql = "DELETE FROM publicacao WHERE id='$id'";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
