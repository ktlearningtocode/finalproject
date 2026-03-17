<?php session_start(); require_once('conn.php');

//login button following these procedures. 

if(isset($_POST['login'])) { 
  //Santitsing to prevent hacking code injections. 
  $email = filter_var ($_POST['email '], FILTER_SANITIZE_EMAIL);
  $email =strtolower($email); 
  $password = strip_tags ($_POST['password']); 
  
  // validate input 
  if (empty ($email)) { 
$errorMsg[]='You must enter an email to login.' ; }
elseif(!filter_var($email, FILTER_VALIDATE_EMAIL)) { 
$errorMsg[]="$email is NOT a valid email address."; }
elseif (empty($password)){ 
$errorMsg[]='You must enter a password to login.'; 
 }
elseif (strlen($password) <5) { 
$errorMsg[]='Your password must be at least 5 characters.';}
}

if(isset($errorMsg)) { 
    foreach ($errorMsg as $loginError) { 
        echo '<div class="error_msg">' . $loginError . '</div>'; 
        }

// If input is valid, this is checking if it's in DB
else{ 
    $pdo= new PDO ($hostdb, $usr, $pwd, $PDOoptions);
$qry="SELECT* FROM user WHERE email=?"; 
$stmt=$pdo-> prepare($qry); 
$stmt-> execute([$email]); 
$row = $stmt->fetch();
}
//if email is found in DB 
if ($stmt-> rowCount() >0) {
    if (password_verify($password, $row['password'])) { 
$errorMsg[] = "You are now logged in"; 
    } else { $errorMsg[]= 'PASSWORD OR EMAIL IS INVALID'; 
      }
      else { $errorMsg[]= 'PASSWORD OR EMAIL IS INVALID'; 
}

}
// IF EMAIL IS FOUND. 
if ($stmt->rowCount() >0) { 
    if (password_verify($password, $row['password'])) { 
$_SESSION['user'] ['email']=$row['email']; 
$_SESSION['user'] ['name']=$row['name'];
$_SESSION['user'] ['id']=$row['id'];
    }
}
}



        if(isset($_GET['logout'])){ 
            logout();
        }



?>

<!DOCTYPE html> 
<hmtl lang='en'> 