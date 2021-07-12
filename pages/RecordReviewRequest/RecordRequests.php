<?php
    if($_POST["message"]) {
        mail("mattmcal88@gmail.com", "New Record Request", $_POST["Hey"]. "From: mattmcal88@gmail.com");
    }
?>