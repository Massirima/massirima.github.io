<?php
    var_dump($_POST) ;
    ?>

    <br><br><br><br><br>
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Recuperation des donnée</title>
    </head>
    <body>
        <center><h1>Affichage des donnée entrer dans le formulaire</h1></center>

        <ul>

            <li><?php echo $_POST['nom']; ?></li>
            <li><?php echo $_POST['email']; ?></li>
            <li><?php echo $_POST['Message___']; ?></li>
            </ul>
        
    </body>
    </html>
