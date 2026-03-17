<?php 

$host ="localhost";
$db= "kb954_project";
$usr="root";
$charset="utf8mb4";
$pwd=""; 


$hostdb ="mysql:host=$host; dbname=$db; charset=$charset"; 


// setting as default so i don't have inline. 
$PDOoptions =[ 
    PDO::ATTR_ERRMODE => PDO:: ERRMODE_EXCEPTION, 
    PDO:: ATTR_DEFAULT_FETCH_MODE => PDO:: FETCH_ASSOC, 
    PDO::ATTR_EMULATE_PREPARES => false, 

]

function logout () {
    unset($_SESSION['user']); 
}

 if ( isset($_SESSION['user'] ['id'])): ?>
    <a href="?logout=1" class="register_btn"> logout </a> 
    <?php else: ?> 

        <a href="#" class= "register_btn"> Register</a> 
        <?php endif; ?> 