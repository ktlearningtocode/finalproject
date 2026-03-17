<?php if (isset($_SESSION['user']['id'])): ?>

//page only for logged in users 


  
  </header>
 <div class="private_content">
  <h2 class="welcome to your account, try out our quiz"> 
    Welcome <?php echo strtoupper ($_SESSION['user'] ['name']); />!
    </h2>
   
    <span> Account ID: <?php echo $_SESSION['user']['id']; ?>
    Email: <?php echo $_SESSION['user']['email']; ?>
    </span> 
    
    <a href="quiz_page.html" class="quiz_page"> Click here to have a go at the quiz </a> 

    </div> 


   