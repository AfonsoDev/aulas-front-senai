<?php 
    require_once("functions/HFsite/HFsite.php");

?>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="icon" type="imagem/png" href="img/icons/pudim.png" />
    <script src="scripts/jquery.js"></script>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script>
            $(document).ready(function(){
                $('.iconeMobile').click(function(){
                    $('.menuMobile').fadeToggle(1000)});
                });
        </script>
    <title>Sobre</title>
</head>
    <body>
         <?php 
            echo (cabecalho());
        ?>   

    <div class="main">
        <header class="container">
                <div class="imgSlide"></div>
        </header>
                <section class="container">
                    <div class="">
                        <div class="text-center py-4">Informações Sobre</div>
                        <div class="conteudoSobre">
                            <div class="textSobre">
                               <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem repellendus quibusdam nobis provident atque earum, expedita temporibus molestias suscipit vitae ex consequuntur harum illo, labore ratione doloribus cupiditate nesciunt!</p>
                            </div>
                        </div>
                        <div class="conteudoSobre">
                            <div class="textSobre">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem repellendus quibusdam nobis provident atque earum, expedita temporibus molestias suscipit vitae ex consequuntur harum illo, labore ratione doloribus cupiditate nesciunt!
                            </div>
                        </div>
                        <div class="conteudoSobre">
                            <div class="textSobre">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem repellendus quibusdam nobis provident atque earum, expedita temporibus molestias suscipit vitae ex consequuntur harum illo, labore ratione doloribus cupiditate nesciunt!
                            </div>
                        </div>
                        <div class="conteudoSobre">
                            <div class="textSobre">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quidem repellendus quibusdam nobis provident atque earum, expedita temporibus molestias suscipit vitae ex consequuntur harum illo, labore ratione doloribus cupiditate nesciunt!
                            </div>
                        </div>
                    </div>
                </section>
    <?php echo(rodape());?>
    </body>
</html>