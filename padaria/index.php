<!-----------------PHP CODIGO -------------->
<?php 

require_once("functions/HFsite/HFsite.php");

?>
<!-----------------HTML CODIGO -------------->
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/reset.css">
        <link rel="shortcut icon" href="img/icons/pudim.png" >
        <script src="scripts/jquery.js"></script>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script>
            $(document).ready(function(){
                $('.iconeMobile').click(function(){
                    $('.menuMobile').fadeToggle(1000)});
                });
        </script>
        
        <title> Index Hill Valley </title>
        
    </head>
    
<body>
<!--        Menu           -->
    <?php echo(cabecalho());?>
        <header class="container">
            <div class="">
                <div class="imgSlide"></div>
            </div>
        </header>
        <?php echo(menuleft());?>
            <section class="container">
                <div class="rightContainer">
                    <?php echo(divProdutoPao());?>
                    <?php echo(divProdutoPao());?>
                    <?php echo(divProdutoPao());?>
                    <?php echo(divProdutoPao());?>
                    <?php echo(divProdutoPao());?>
                    <?php echo(divProdutoPao());?>
                </div>
                <div>
                <?php echo(redesSociais());?>
            </div>
            </section>
        <?php echo(rodape());  ?>
    </body>
</html>