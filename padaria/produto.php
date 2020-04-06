<?php 
    require_once("functions/HFsite/HFsite.php");
    ?>
<!doctype html>
<html lang="pt-br">
    <head>
        <title> aula de PHP 03 </title>
        <meta charset="utf-8">
        <link rel="stylesheet" type="text/css" href="promocao/style.css">
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="scripts/jquery.js"></script>
        <link rel="shortcut icon" href="img/icons/pudim.png" >
        <script>
            $(document).ready(function(){
                $('.iconeMobile').click(function(){
                    $('.menuMobile').fadeToggle(1000)});
                });
        </script>
    </head>
<body>         
    <?php echo(cabecalho());?>
         <header> </header>
         <section>
             <div class="container">
                 <div id="containerProdutoDestaque">
                        
                     <div class="produtoSecundario"></div>
                     <div id="produtoDestaque"></div>
                     <div class="produtoSecundario"></div>
                 </div>
             </div>
         </section>
         <div id="titulo"><h2 class="container h2-titulo">Produto do Mês</h2></div>
         <section id="containerPromocaoDoDia">
             <?php echo (pdmes());?>
             <?php echo (pdmes());?>
         </section>
         <?php echo(rodape());?>
         <div class="bg-modal" id="modal">
            <div class="modal">
                <span class="close" onclick="fecharModal()">x</span>
            </div>
        </div>
       
        <script>
            function abrirModal(){
                document.getElementById('modal').style.display = "block";
            }
            function fecharModal(){
                document.getElementById('modal').style.display = "none";
            }
        </script>
    </body>
</html>